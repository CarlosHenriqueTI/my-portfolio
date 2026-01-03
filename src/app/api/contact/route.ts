import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '../../lib/validationSchemas';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Iniciando processamento da requisição de contato');
    
    const body = await request.json();
    console.log('📋 Dados recebidos:', { 
      name: body.name, 
      email: body.email, 
      messageLength: body.message?.length || 0 
    });
    
    // Valida os dados usando o schema Zod
    const validatedData = contactFormSchema.parse(body);
    console.log('✅ Dados validados com sucesso');
    
    // Verifica se as variáveis de ambiente estão definidas
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Variáveis de ambiente EMAIL_USER ou EMAIL_PASS não estão definidas');
      return NextResponse.json(
        { message: 'Configuração de email não encontrada' },
        { status: 500 }
      );
    }
    
    console.log('📧 Configurando transportador de email para:', process.env.EMAIL_USER);
    
    // Configuração do transportador de e-mail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verificar a conexão com o servidor de e-mail
    console.log('🔍 Verificando conexão com servidor de email...');
    try {
      await transporter.verify();
      console.log('✅ Conexão com servidor de email verificada com sucesso');
    } catch (verifyError: unknown) {
      const error = verifyError as Error & { code?: string; command?: string };
      console.error('❌ Erro ao verificar conexão com servidor de email:', {
        message: error.message,
        code: error.code,
        command: error.command
      });
      
      // Retornar erro mais específico
      return NextResponse.json(
        { 
          message: 'Erro na configuração do servidor de email',
          details: error.message 
        },
        { status: 500 }
      );
    }

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

    console.log('📤 Enviando e-mail...');
    
    // Envia o e-mail
    await transporter.sendMail(mailOptions);
    
    console.log('✅ E-mail enviado com sucesso!');

    return NextResponse.json(
      { message: 'E-mail enviado com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Erro ao enviar e-mail:', error);
    
    // Se for erro de validação do Zod
    if (error instanceof ZodError) {
      console.error('❌ Erro de validação:', error.issues);
      return NextResponse.json(
        { message: 'Dados inválidos', errors: error.issues },
        { status: 400 }
      );
    }

    // Log detalhado do erro
    if (error instanceof Error) {
      console.error('❌ Detalhes do erro:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }

    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
