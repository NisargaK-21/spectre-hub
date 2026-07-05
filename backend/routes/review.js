const express = require("express");
const ai = require("../config/gemini");
const Progress = require("../models/Progress");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { uid, stage, code, challenge } = req.body;

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

    const review = response.text;

    const match = review.match(/(\d+)\/10/);

    const score = match ? Number(match[1]) : 0;

    const completed = score >= 7;

    await Progress.create({
      uid,
      stage,
      submittedCode: code,
      review,
      score,
      completed,
    });

    res.json({
      review,
      score,
      completed,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;