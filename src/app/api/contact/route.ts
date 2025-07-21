import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '../../lib/validationSchemas';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Valida os dados usando o schema Zod
    const validatedData = contactFormSchema.parse(body);
    
    // Configuração do transportador de e-mail
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou use 'smtp' para configuração personalizada
      auth: {
        user: process.env.EMAIL_USER, // Seu e-mail
        pass: process.env.EMAIL_PASS, // Senha do app ou senha do e-mail
      },
    });

    // Configuração do e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // E-mail para onde você quer receber as mensagens
      subject: `Nova mensagem do portfólio - ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">Nova mensagem do seu portfólio</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${validatedData.name}</p>
            <p><strong>E-mail:</strong> ${validatedData.email}</p>
            <p><strong>Mensagem:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #0891b2;">
              ${validatedData.message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            Esta mensagem foi enviada através do formulário de contato do seu portfólio.
          </p>
        </div>
      `,
      replyTo: validatedData.email, // Para responder diretamente ao remetente
    };

    // Envia o e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'E-mail enviado com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    
    // Se for erro de validação do Zod
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: 'Dados inválidos', errors: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
