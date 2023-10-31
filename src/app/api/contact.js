import { mailOptions, transporter } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  message: "Message",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val}} \n \n`),
    "",
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `<h1 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h1><p class="form-answer" align="left">${val}</p>`),
    "",
  );

  return {
    text: stringData,
    html: `<!DOCTYPE html><title></title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><meta content="IE=edge"http-equiv=X-UA-Compatible><style>a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}@media screen and (max-width:525px){.wrapper{width:100%!important;max-width:100%!important}.responsive-table{width:100%!important}.padding{padding:10px 5% 15px 5%!important}.section-padding{padding:0 15px 50px 15px!important}}.form-container{margin-bottom:24px;padding:20px;border:1px dashed #ccc}.form-heading{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;text-align:left;line-height:20px;font-size:18px;margin:0 0 8px;padding:0}.form-answer{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;text-align:left;line-height:20px;font-size:16px;margin:0 0 24px;padding:0}div[style*="margin: 16px 0;"]{margin:0!important}</style><body style=margin:0!important;padding:0!important;background:#fff><div style=display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden></div><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td class=section-padding style="padding:10px 15px 30px 15px"align=center bgcolor=#ffffff><table border=0 cellpadding=0 cellspacing=0 width=100% class=responsive-table style=max-width:500px><tr><td><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td class="message-content padding"style=padding:0;font-size:16px;line-height:25px;color:#232323><h2>New Contact Message</h2><div class=form-container>${htmlData}</div></table></table></table></table>`,
  };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    if (!data.name || !data.phone || !data.email || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Contato - ${data.name}`,
        ...generateEmailContent(data),
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json({
      message: "E-mail sent successfully",
    });
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
