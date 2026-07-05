const express = require("express");
const ai = require("../config/gemini");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { code, challenge } = req.body;

    const prompt = `
You are an expert web development mentor.

Challenge:
${challenge}

Student Code:
${code}

Review the code.

Return:
1. Correctness
2. Bugs
3. Improvements
4. Best Practices
5. Score out of 10
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      review: response.text,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;