import StudentModel from "../models/Student.js";
const contactFormController = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, subject, message } = req.body;
    const doc = new StudentModel({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
    // console.log(name);
    const result = await doc.save();
    // console.log(result);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export { contactFormController };
