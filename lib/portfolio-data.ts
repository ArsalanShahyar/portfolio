// Central portfolio data for Arsalan Shahyar
// Edit this file to update all content across the site

export const profile = {
    name: "Arsalan Shahyar",
    title: "Aspiring AI and Machine Learning Developer",
    shortIntro:
        "Computer Science student passionate about AI, Machine Learning, and building real-world solutions through clean, scalable code.",
    about: {
        bio: `I am Arsalan Shahyar, a Computer Science bachelor’s student at Kabul Educational University and an aspiring AI and Machine Learning developer passionate about using technology to solve real-world problems. I care deeply about professional standards and writing clean, efficient, and scalable code. My technical skills include Pandas, NumPy, Matplotlib, Scikit-learn, and PyTorch, which I use for data analysis, visualization, and building machine learning models. Through continuous learning and hands-on projects, I have built a solid foundation in AI, machine learning, and problem-solving. I am adaptable, quick to learn, and effective in diverse and remote environments, with strong cross-cultural communication skills. Driven by a growth mindset, I continuously work to improve my skills and create meaningful impact through artificial intelligence.`,
        mission: `My mission is to leverage artificial intelligence to solve meaningful problems, continuously grow as a developer, and contribute to impactful projects that advance technology for good.`,
        strengths: [
            "Adaptability",
            "Remote collaboration",
            "Problem-solving",
            "Growth mindset",
            "Cross-cultural communication"
        ],
        focusAreas: [
            "Artificial Intelligence",
            "Machine Learning",
            "Computer Vision",
            "Data Analysis",
            "Problem Solving",
            "Clean and Scalable Development"
        ]
    },
    education: {
        degree: "Bachelor’s Degree in Computer Science",
        institution: "Kabul Educational University",
        details: `I am committed to continuous learning, self-improvement, and hands-on practice to stay at the forefront of AI and Machine Learning.`
    },
    skills: [
        {
            category: "Programming",
            items: ["Python"],
            description: "Writing clean, efficient, and maintainable code for data-driven applications."
        },
        {
            category: "Data Analysis",
            items: ["Pandas", "NumPy"],
            description: "Manipulating, analyzing, and extracting insights from complex datasets."
        },
        {
            category: "Visualization",
            items: ["Matplotlib"],
            description: "Creating clear, informative visualizations to communicate data findings."
        },
        {
            category: "Machine Learning",
            items: ["Scikit-learn", "PyTorch"],
            description: "Building, training, and evaluating machine learning models for real-world problems."
        }
    ],
    projects: [
        {
            slug: "food-vision",
            title: "Food Vision",
            summary: "Image classification model that identifies steak, pizza, or sushi from photos.",
            problem: "Accurately classifying food images into specific categories.",
            solution: "Developed a computer vision model using PyTorch to classify images into three food categories, with a user-friendly interface for predictions.",
            features: [
                "Image upload and prediction",
                "Robust data preprocessing",
                "Accurate multi-class classification"
            ],
            tools: ["Python", "PyTorch"],
            github: "https://github.com/ArsalanShahyar/Food_Vision",
            learnings: "Deepened my understanding of convolutional neural networks and practical computer vision workflows."
        },
        {
            slug: "fashion-mnist",
            title: "FashionMNIST",
            summary: "Image classification on the Fashion-MNIST dataset for clothing categories.",
            problem: "Predicting fashion item categories from grayscale images.",
            solution: "Built and trained a PyTorch model to classify clothing images, optimizing for accuracy and generalization.",
            features: [
                "Efficient data pipeline",
                "Model training and evaluation",
                "Clear result visualization"
            ],
            tools: ["Python", "PyTorch"],
            github: "https://github.com/ArsalanShahyar/FashionMNIST",
            learnings: "Improved my skills in model evaluation and working with image datasets."
        },
        {
            slug: "bulldozers-price-prediction",
            title: "Bulldozers Price Prediction",
            summary: "Regression model predicting bulldozer prices from historical sales data.",
            problem: "Estimating equipment prices based on complex, real-world data.",
            solution: "Engineered features and trained a regression model using Scikit-learn to predict bulldozer prices, focusing on data quality and model interpretability.",
            features: [
                "Comprehensive data preprocessing",
                "Feature engineering",
                "Accurate price prediction"
            ],
            tools: ["Python", "Pandas", "NumPy", "Scikit-learn"],
            github: "https://github.com/ArsalanShahyar/Bulldozer_Price_Prediction",
            learnings: "Gained experience in regression modeling and the importance of data preparation."
        },
        {
            slug: "heart-disease-prediction",
            title: "Heart Disease Prediction",
            summary: "Classification model predicting the likelihood of heart disease from patient data.",
            problem: "Identifying patients at risk of heart disease using health data.",
            solution: "Developed a predictive model with Scikit-learn, including data visualization and robust evaluation.",
            features: [
                "Data visualization",
                "Predictive modeling",
                "Comprehensive evaluation"
            ],
            tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
            github: "https://github.com/ArsalanShahyar/heart_disease_prediction",
            learnings: "Enhanced my ability to translate data into actionable insights for healthcare."
        }
    ],
    contact: {
        email: "arsalan.shahyar@gmail.com",
        github: "https://github.com/ArsalanShahyar",
        message: "Interested in collaborating or have an opportunity in AI or Machine Learning? Let’s connect!"
    }
};
