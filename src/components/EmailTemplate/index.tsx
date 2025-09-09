import * as React from "react";

type EmailTemplateProps = {
    email: string;
    message: string;
}

export function EmailTemplate(props: EmailTemplateProps) {
    return (
        <div className="container mx-auto">
            <div className="bg-slate-800 p-3 text-center">
                <h1>David William Portfolio</h1>
            </div>
            <div className="p-3">
                <p>from: {props.email}</p>
                <p>{props.message}</p>
            </div>
        </div>
    )
}