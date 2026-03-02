export const featuredProjects = [
  {
    id: "1",
    slug: "aryan-vision-ai",
    author: "Aryan Mehta",
    authorInitials: "AM",
    role: "AI/ML Engineer · IIT Bombay",
    avatarColor: "linear-gradient(135deg,#00f5ff,#0066ff)",
    domain: "Computer Vision",
    title: "Real-Time Crowd Density Estimation on Edge GPU",
    description:
      "Deployed YOLOv8 + custom density head on NVIDIA Jetson Orin. Achieves 60fps inference with 94% mAP. Patent filed.",
    tags: ["CUDA", "YOLOv8", "Jetson", "TensorRT", "Python"],
    gradient: "linear-gradient(135deg,#020b14 0%,#001a2e 50%,#003355 100%)",
    initials: "CV",
    badges: ["Verified Project", "Patent Holder"],
  },
  {
    id: "2",
    slug: "priya-llm-rag",
    author: "Priya Sharma",
    authorInitials: "PS",
    role: "NLP Researcher · BITS Pilani",
    avatarColor: "linear-gradient(135deg,#76b900,#2d7600)",
    domain: "Natural Language Processing",
    title: "Domain-Adaptive RAG Pipeline for Medical QA",
    description:
      "Fine-tuned LLaMA 3 on clinical notes. Built RAG system with LangChain + Pinecone. 89% accuracy on MedQA benchmark.",
    tags: ["LLM", "RAG", "LangChain", "LLaMA", "Docker"],
    gradient: "linear-gradient(135deg,#020b14 0%,#0d1a00 50%,#1a3300 100%)",
    initials: "NLP",
    badges: ["Verified Project", "Industry Ready"],
  },
  {
    id: "3",
    slug: "rahul-robotics",
    author: "Rahul Verma",
    authorInitials: "RV",
    role: "Robotics Engineer · NIT Trichy",
    avatarColor: "linear-gradient(135deg,#a855f7,#6d28d9)",
    domain: "Robotics",
    title: "Autonomous Warehouse Robot with SLAM Navigation",
    description:
      "ROS2-based AMR with GPU-accelerated point cloud processing. Navigates dynamic environments with sub-2cm precision.",
    tags: ["ROS2", "SLAM", "CUDA", "PCL", "IsaacSim"],
    gradient: "linear-gradient(135deg,#020b14 0%,#150a2e 50%,#2d1466 100%)",
    initials: "R",
    badges: ["Verified Project", "Industry Ready"],
  },
  {
    id: "4",
    slug: "sneha-diffusion",
    author: "Sneha Patel",
    authorInitials: "SP",
    role: "GenAI Developer · IIIT Hyderabad",
    avatarColor: "linear-gradient(135deg,#ff6b6b,#ee5a24)",
    domain: "Generative AI",
    title: "ControlNet Fine-Tuning for Architectural Design",
    description:
      "Custom ControlNet + SDXL pipeline for generating architect-ready floor plans from rough sketches.",
    tags: ["Diffusion", "ControlNet", "SDXL", "GPU", "PyTorch"],
    gradient: "linear-gradient(135deg,#020b14 0%,#1a0a0a 50%,#330d0d 100%)",
    initials: "GA",
    badges: ["Verified Project"],
  },
  {
    id: "5",
    slug: "kiran-edge-ai",
    author: "Kiran Nair",
    authorInitials: "KN",
    role: "Edge Systems Eng · IISc",
    avatarColor: "linear-gradient(135deg,#00f5ff,#76b900)",
    domain: "Edge AI",
    title: "TinyML Gesture Recognition at 1mW Power",
    description:
      "Deployed quantized MobileNetV3 on Cortex-M7. Achieves 97.3% accuracy at 1mW. Compatible with NVIDIA Fleet Commander.",
    tags: ["TinyML", "Quantization", "NVIDIA", "C++", "ARM"],
    gradient: "linear-gradient(135deg,#020b14 0%,#001a1a 50%,#003333 100%)",
    initials: "EA",
    badges: ["Verified Project", "Patent Holder"],
  },
  {
    id: "6",
    slug: "aditya-systems-ai",
    author: "Aditya Kumar",
    authorInitials: "AK",
    role: "Systems Researcher · IIT Delhi",
    avatarColor: "linear-gradient(135deg,#ffd700,#ff8c00)",
    domain: "Systems AI",
    title: "GPU-Accelerated Graph Neural Network Framework",
    description:
      "Custom CUDA kernels for sparse GNN ops. 8x speedup over PyG baseline. Open-sourced with 800+ GitHub stars.",
    tags: ["CUDA", "GNN", "Triton", "C++", "Python"],
    gradient: "linear-gradient(135deg,#020b14 0%,#1a1000 50%,#331f00 100%)",
    initials: "GNN",
    badges: ["Verified Project", "Industry Ready"],
  },
];

export const allTalent = [
  ...featuredProjects,
  {
    id: "7",
    slug: "meera-cloud-ai",
    author: "Meera Joshi",
    authorInitials: "MJ",
    role: "Cloud AI Architect · Manipal",
    avatarColor: "linear-gradient(135deg,#00f5ff,#0044aa)",
    domain: "Systems AI",
    title: "Distributed LLM Inference on Kubernetes",
    description:
      "Multi-node vLLM cluster on AWS with auto-scaling. Serves 10k+ requests/day with p99 <200ms latency.",
    tags: ["vLLM", "Kubernetes", "AWS", "Docker", "LLM"],
    gradient: "linear-gradient(135deg,#020b14 0%,#000a1a 50%,#00142e 100%)",
    initials: "CL",
    badges: ["Verified Project"],
  },
  {
    id: "8",
    slug: "dev-bio-ai",
    author: "Dev Anand",
    authorInitials: "DA",
    role: "Bioinformatics AI · AIIMS",
    avatarColor: "linear-gradient(135deg,#76b900,#00aa44)",
    domain: "Computer Vision",
    title: "AI-Powered Cancer Cell Detection in Pathology Slides",
    description:
      "Vision Transformer fine-tuned on TCGA dataset. 96.8% AUC on HER2 classification. Co-authored paper in Nature Digital Medicine.",
    tags: ["ViT", "PyTorch", "CUDA", "Medical Imaging", "HPC"],
    gradient: "linear-gradient(135deg,#020b14 0%,#0a1a00 50%,#142e00 100%)",
    initials: "BIO",
    badges: ["Verified Project", "Patent Holder"],
  },
];

export const profileData: Record<string, {
  name: string;
  role: string;
  institution: string;
  bio: string;
  location: string;
  avatarColor: string;
  initials: string;
  badges: string[];
  skills: string[];
  projects: {
    title: string;
    description: string;
    techStack: string[];
    github: string;
    demo?: string;
    images: string[];
    gradient: string;
    initials: string;
  }[];
  publications: {
    title: string;
    venue: string;
    year: string;
    link?: string;
  }[];
  patents: {
    title: string;
    number?: string;
    status: string;
    year: string;
  }[];
}> = {
  "aryan-vision-ai": {
    name: "Aryan Mehta",
    role: "AI/ML Engineer",
    institution: "IIT Bombay",
    bio: "Building real-time computer vision systems for edge and cloud. Passionate about GPU optimization, TensorRT, and deploying AI in production environments.",
    location: "Mumbai, India",
    avatarColor: "linear-gradient(135deg,#00f5ff,#0066ff)",
    initials: "AM",
    badges: ["Verified Project", "Patent Holder", "Industry Ready"],
    skills: ["CUDA", "TensorRT", "YOLOv8", "Jetson", "Python", "C++", "OpenCV", "Docker"],
    projects: [
      {
        title: "Real-Time Crowd Density Estimation on Edge GPU",
        description:
          "Deployed YOLOv8 augmented with a custom density regression head on NVIDIA Jetson Orin NX. Achieves 60fps real-time inference with 94% mAP on MOT17 benchmark. Optimized via TensorRT FP16 quantization for 3.2x speedup over PyTorch baseline.",
        techStack: ["CUDA", "YOLOv8", "Jetson Orin", "TensorRT", "Python", "OpenCV"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        images: [],
        gradient: "linear-gradient(135deg,#001a2e,#003366)",
        initials: "CV",
      },
      {
        title: "Multi-Camera Synchronized Person ReID System",
        description:
          "Cross-camera person re-identification pipeline using OSNet + GPU-accelerated feature matching. Handles 16 simultaneous camera feeds on a single A100.",
        techStack: ["OSNet", "CUDA", "Python", "Redis", "Docker"],
        github: "https://github.com",
        images: [],
        gradient: "linear-gradient(135deg,#001a2e,#001a3d)",
        initials: "ReID",
      },
    ],
    publications: [
      {
        title: "Edge-Optimized Crowd Analytics with TensorRT: A Production Study",
        venue: "IEEE CVPR Workshop 2024",
        year: "2024",
        link: "#",
      },
    ],
    patents: [
      {
        title: "Method for Real-Time Crowd Density Estimation Using Edge GPU",
        number: "IN202441012345",
        status: "Filed",
        year: "2024",
      },
    ],
  },
};
