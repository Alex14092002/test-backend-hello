import User from "../models/User";

const userController = {
	register: async (req, res) => {
		try {
			const { username, password } = req.body;
			const newUser = new User({ username, password });
			await newUser.save();
			res.status(200).json(newUser);
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
};
export default userController;

// 200 : thanh cong
// 400 , 401 , 403 , 500 : loi
