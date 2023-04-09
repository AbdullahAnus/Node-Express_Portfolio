import StudentModel from "../models/Student.js";
import AdminModel from "../models/Admin.js";
const adminController = async (req, res) => {
  try {
    const result = await AdminModel.find();
    // console.log(result);
    const adminData = {
      Email: "abdullahboxer5@gmail.com",
      Password: "admin123",
    };
    if (
      req.body.Email == adminData.Email &&
      req.body.Password == adminData.Password
    ) {
      const result = await StudentModel.find();
      // console.log(result);
      res.render("./admin/user", { title: "Admin", data: result });
    } else {
      res.render("./admin/login", { title: "login" });
    }
  } catch (error) {
    console.log(error);
  }
};

export { adminController };
