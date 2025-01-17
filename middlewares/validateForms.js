const { isValidPhoneNumber } = require("libphonenumber-js");

const validateForms = (req, res, next) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "必須項目が未記入です。" });
  }
  //   const isValid =
  //     (phone.length === 10 || phone.length === 11) &&
  //     isValidPhoneNumber(phone, "JP");
  //   console.log(isValid);
  //   if (!isValid) {
  //     return res.status(400).json({
  //       error:
  //         "無効な電話番号です。10桁、もしくは11桁の数字を入力する必要があります。",
  //     });
  //   }

  //サニタイズ
  function health(input) {
    return String(input)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  req.body.name = health(name);
  req.body.email = health(email);
  req.body.message = health(message);

  next();
};

module.exports = validateForms;
