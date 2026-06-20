import {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const {message, email} = await request.json();
    try {
        const {data, error} = await resend.emails.send(
            {
                from: 'onboarding@resend.dev',
                to: ["davidwilldacosta@gmail.com"],
                subject: "Portfolio email sender",
                html: `
                    <p>from: ${email}</p>
                    <p>${message}</p>
                `
            }
        )

        if(error) {
            return Response.json({error}, {status: 500})
        }

        return Response.json(data)
    } catch(error) {
        return Response.json({error}, {status: 500})
    }
}