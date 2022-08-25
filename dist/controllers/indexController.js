const Reservation=require("../models/reservation"),nodemailer=require("nodemailer");exports.homepage=async(e,a)=>{try{a.render("pages/index")}catch(e){a.status(500).send({message:e.message||"Error Occured"})}},exports.calendarTerm=async(e,a)=>{try{const s=new Reservation({Name:e.body.name,Date:e.body.date,Email:e.body.email,Phone:e.body.phone,Packet:e.body.package,Accepted:!1,Rejected:!1});await s.save(),a.status(201).redirect("/")}catch(e){a.status(500).send({message:e.message||"Error Occured"})}},exports.sendContactMessage=async(a,s)=>{try{var t={name:a.body.name,phone:a.body.phone,email:a.body.email,subject:a.body.subject,message:a.body.message};let e=nodemailer.createTransport({host:"smtp.mailtrap.io",port:587,secure:!1,auth:{user:"e7102dbeaacdcd",pass:"c66ed2599ce002"}});await e.sendMail({from:'"Just Married Mailer" <foo@example.com>',to:t.email,subject:"Potwierdzenie wysłania zgłoszenia ✔",text:"Twoja wiadomość została wysłana prawidłowo.\nCzekaj na kontakt z naszej strony.\n\nWysłane dane:\n"+`Imie i nazwisko: ${t.name}
`+`Numer telefonu: ${t.phone}
`+`Email: ${t.email}
`+`Temat: ${t.subject}
`+"Treść wiadomości: "+t.message}),await e.sendMail({from:`"${t.name}" <${t.email}>`,to:"justmarried.mailer@gmail.com",subject:t.subject,text:`Wiadomość otrzymana z systemu ContactUs.

`+`Imie i nazwisko: ${t.name}
`+`Numer telefonu: ${t.phone}
`+`Email: ${t.email}

`+t.subject+`

`+t.message}),s.status(201).redirect("/")}catch(e){s.status(500).send({message:e.message||"Error Occured"})}};