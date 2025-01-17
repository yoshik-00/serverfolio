const libphonenumber = require("google-libphonenumber");
const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

const validateForms = (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;
    const requiredFields = { name, email, message };
    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value?.trim())
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: `以下の必須項目が未記入です: ${missingFields.join(", ")}`,
      });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "無効なメールアドレスです。",
      });
    }

    if (phone) {
      try {
        const phoneNumber = phoneUtil.parse(phone, "JP");
        const isValid = phoneUtil.isValidNumber(phoneNumber);
        console.log(phoneNumber);
        console.log(isValid);
        if (!isValid) {
          return res.status(400).json({
            error:
              "無効な電話番号です。正しい日本の電話番号形式で入力してください。",
          });
        }
      } catch (error) {
        return res.status(400).json({
          error: "電話番号の形式が正しくありません。",
        });
      }
    }

    const maxLengths = {
      name: 50,
      email: 100,
      message: 1000,
    };

    for (const [field, maxLength] of Object.entries(maxLengths)) {
      if (req.body[field]?.length > maxLength) {
        return res.status(400).json({
          error: `${field}は${maxLength}文字以内で入力してください。`,
        });
      }
    }

    // サニタイズ
    const sanitize = (input) => {
      if (!input) return input;
      return String(input)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&#x27;")
        .replace(/\//g, "&#x2F;");
    };

    for (const field of ["name", "email", "message"]) {
      req.body[field] = sanitize(req.body[field]);
    }

    next();
  } catch (error) {
    console.error("Form validation error:", error);
    res.status(500).json({
      error: "フォームの検証中にエラーが発生しました。",
    });
  }
};

module.exports = validateForms;
