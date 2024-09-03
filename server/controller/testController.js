const testRoute = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);

    await res.status(200).json({
      success: true,
      error: false,
      data: {
        nameMatch: req.body.name === name,
        emailMatch: req.body.email === email,
        passwordMatch: req.body.password === password,
      },
    });
  } catch (error) {
    console.error("Error:", error); // Log error for debugging
    res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

export { testRoute };
