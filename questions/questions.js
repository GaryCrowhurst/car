// EVOLVE 155 Question Bank
const questionBank = [
  // SERVICE INFORMATION SOURCES
  {
    id: 1,
    category: "Service Information",
    difficulty: "easy",
    question: "What is the main purpose of a service manual?",
    options: [
      "To give information on repairs and maintenance",
      "To calculate labor costs",
      "To store customer details",
      "To order replacement parts"
    ],
    correct: 0,
    explanation: "Service manuals provide repair procedures, technical data, and safety practices."
  },
  {
    id: 2,
    category: "Service Information",
    difficulty: "easy",
    question: "Which information source is now mostly redundant?",
    options: [
      "Service manuals",
      "Computerized data",
      "Micro-fiche",
      "Wall charts"
    ],
    correct: 2,
    explanation: "Micro-fiche has been replaced by computer-based systems."
  },
  {
    id: 3,
    category: "Service Information",
    difficulty: "medium",
    question: "What type of publication is given to new vehicle owners?",
    options: [
      "Flat rate manual",
      "Owner's manual",
      "Technical service bulletin",
      "Third party manual"
    ],
    correct: 1,
    explanation: "The owner's manual (driver's handbook) contains basic vehicle information."
  },
  {
    id: 4,
    category: "Service Information",
    difficulty: "medium",
    question: "What is a flat rate manual used for?",
    options: [
      "Finding vehicle specifications",
      "Calculating labor costs for repairs",
      "Ordering replacement parts",
      "Checking tyre pressures"
    ],
    correct: 1,
    explanation: "Flat rate manuals show estimated repair times to calculate labor charges."
  },
  {
    id: 5,
    category: "Service Information",
    difficulty: "hard",
    question: "What special tools are needed for fuel injector removal?",
    options: [
      "Torque wrench and micrometer",
      "CO meter and tachometer",
      "Compression tester and timing light",
      "Multimeter and oscilloscope"
    ],
    correct: 1,
    explanation: "CO meter and tachometer are needed to check exhaust gases during fuel injector work."
  },
  {
    id: 6,
    category: "Service Information",
    difficulty: "medium",
    question: "What are the THREE types of technical service bulletins?",
    options: [
      "Technical bulletin, technical tip, recall action bulletin",
      "Service manual, owner's manual, flat rate manual",
      "Wall chart, micro-fiche, computerized data",
      "Workshop manual, parts manual, labor guide"
    ],
    correct: 0,
    explanation: "Technical service bulletins include technical bulletins, technical tips, and recall action bulletins."
  },
  {
    id: 7,
    category: "Service Information",
    difficulty: "easy",
    question: "Who typically uses third party service manuals?",
    options: [
      "Professional workshop technicians",
      "Vehicle manufacturers",
      "Vehicle owners doing DIY repairs",
      "Main dealer repair shops"
    ],
    correct: 2,
    explanation: "Third party manuals are normally used by vehicle owners rather than professional workshops."
  },
  {
    id: 8,
    category: "Service Information",
    difficulty: "medium",
    question: "What is the purpose of a recall action bulletin?",
    options: [
      "To inform about new vehicle models",
      "To recall vehicles with serious safety faults",
      "To advertise service offers",
      "To update workshop equipment"
    ],
    correct: 1,
    explanation: "Recall action bulletins are used when serious faults are found that may affect safety."
  },
  {
    id: 9,
    category: "Service Information",
    difficulty: "easy",
    question: "Where might you find tyre pressure information in a workshop?",
    options: [
      "On a wall chart",
      "In the engine bay",
      "On the dashboard",
      "Under the bonnet"
    ],
    correct: 0,
    explanation: "Wall charts display information like tyre pressures for easy reference."
  },
  {
    id: 10,
    category: "Service Information",
    difficulty: "hard",
    question: "What are the FOUR advantages of computerized service data?",
    options: [
      "Large storage, doesn't wear out, easy updates, shareable",
      "Cheap, simple, portable, colorful",
      "Fast, small, lightweight, waterproof",
      "Printed, bound, indexed, durable"
    ],
    correct: 0,
    explanation: "Computerized data can store large amounts, doesn't wear out, updates easily, and can be shared."
  },

  // VEHICLE PREPARATION - BEFORE WORK
  {
    id: 11,
    category: "Vehicle Preparation",
    difficulty: "easy",
    question: "What must be available before starting work on a vehicle?",
    options: [
      "Only tools",
      "Only PPE",
      "PPE, tools, service information, and replacement parts",
      "Only replacement parts"
    ],
    correct: 2,
    explanation: "All of these are important and must be available before work begins."
  },
  {
    id: 12,
    category: "Vehicle Preparation",
    difficulty: "easy",
    question: "What condition must PPE be in before use?",
    options: [
      "Any condition is acceptable",
      "Clean and in good condition",
      "Slightly worn is fine",
      "Dirty but functional"
    ],
    correct: 1,
    explanation: "PPE must be available, clean, and in good condition."
  },
  {
    id: 13,
    category: "Vehicle Preparation",
    difficulty: "medium",
    question: "What should you do with loose valuables from a vehicle?",
    options: [
      "Leave them in the vehicle",
      "Give them to the customer",
      "Remove and secure them in a safe place",
      "Place them on the dashboard"
    ],
    correct: 2,
    explanation: "Loose valuables must be removed and secured safely before work begins."
  },
  {
    id: 14,
    category: "Vehicle Preparation",
    difficulty: "medium",
    question: "What must be completed for a required task before work starts?",
    options: [
      "A customer invoice",
      "A risk assessment",
      "A parts order",
      "A time sheet"
    ],
    correct: 1,
    explanation: "A risk assessment must be completed for the required task before starting."
  },
  {
    id: 15,
    category: "Vehicle Preparation",
    difficulty: "easy",
    question: "What should the work area be like before starting?",
    options: [
      "Cluttered and busy",
      "Clean, tidy, and appropriate for the task",
      "Dimly lit",
      "Outdoors"
    ],
    correct: 1,
    explanation: "The work area must be clean, tidy, and appropriate for the task (e.g., level floor)."
  },
  {
    id: 16,
    category: "Vehicle Preparation",
    difficulty: "hard",
    question: "What types of service information might you need before starting work?",
    options: [
      "Service manual, CD, TSB, or internet resources",
      "Only paper manuals",
      "Only online forums",
      "Customer service records only"
    ],
    correct: 0,
    explanation: "Correct information can come from service manuals, CDs, technical service bulletins, or internet."
  },
  {
    id: 17,
    category: "Vehicle Preparation",
    difficulty: "medium",
    question: "What condition must workshop equipment be in?",
    options: [
      "Available and in good working condition",
      "Just available",
      "Partially working",
      "Any condition"
    ],
    correct: 0,
    explanation: "Workshop equipment must be available and in good working condition with instruction manuals."
  },
  {
    id: 18,
    category: "Vehicle Preparation",
    difficulty: "medium",
    question: "What should be fitted to the vehicle before work begins?",
    options: [
      "New parts",
      "Applicable protection items",
      "Warning lights",
      "Customer advertising"
    ],
    correct: 1,
    explanation: "The vehicle must be fitted with applicable protection items (seat covers, wing covers, etc.)."
  },

  // AFTER COMPLETING WORK
  {
    id: 19,
    category: "After Work",
    difficulty: "easy",
    question: "What should you do with hand tools after completing work?",
    options: [
      "Leave them on the workbench",
      "Clean and return to designated storage",
      "Put them in your toolbox",
      "Leave them in the vehicle"
    ],
    correct: 1,
    explanation: "All hand tools should be cleaned and returned to their designated storage areas."
  },
  {
    id: 20,
    category: "After Work",
    difficulty: "medium",
    question: "What should you do if hand tools are damaged?",
    options: [
      "Use them anyway",
      "Throw them away",
      "Report to workshop supervisor or foreman",
      "Hide them"
    ],
    correct: 2,
    explanation: "Damaged hand tools must be reported to the workshop supervisor or foreman."
  },
  {
    id: 21,
    category: "After Work",
    difficulty: "easy",
    question: "Should a customer's vehicle be locked after work is completed?",
    options: [
      "No, if it's on shop property",
      "Yes, after moving to parking area",
      "Only at night",
      "Only if the customer requests it"
    ],
    correct: 1,
    explanation: "An authorized person must move the vehicle to the parking area and lock it."
  },
  {
    id: 22,
    category: "After Work",
    difficulty: "medium",
    question: "What should you do with damaged workshop equipment?",
    options: [
      "Continue using it carefully",
      "Raise a defect notice and report to supervisor",
      "Ignore it",
      "Try to repair it yourself"
    ],
    correct: 1,
    explanation: "A defect notice must be raised and reported to the workshop supervisor or foreman."
  },
  {
    id: 23,
    category: "After Work",
    difficulty: "easy",
    question: "What condition should the work area be in after completing work?",
    options: [
      "Left as it is",
      "Cleaned and tidied",
      "Partially cleaned",
      "Someone else's responsibility"
    ],
    correct: 1,
    explanation: "The work area must be cleaned and tidied after completing work."
  },
  {
    id: 24,
    category: "After Work",
    difficulty: "medium",
    question: "What paperwork should be completed after a job?",
    options: [
      "Nothing required",
      "Only customer invoice",
      "Work order and job sheet/card",
      "Only time sheet"
    ],
    correct: 2,
    explanation: "Required paperwork includes work orders and job sheets/cards."
  },
  {
    id: 25,
    category: "After Work",
    difficulty: "hard",
    question: "Who should move the vehicle to the parking area after work?",
    options: [
      "Any available person",
      "The customer",
      "An authorized person",
      "The apprentice"
    ],
    correct: 2,
    explanation: "Only an authorized person should move the vehicle to the parking area and lock it."
  },

  // MIXED DIFFICULTY SCENARIO QUESTIONS
  {
    id: 26,
    category: "Scenarios",
    difficulty: "hard",
    question: "You need to remove a fuel injector. What should you check first?",
    options: [
      "Customer's budget",
      "Service manual for special tools and procedures",
      "Workshop availability",
      "Customer's schedule"
    ],
    correct: 1,
    explanation: "Always check the service manual first - fuel injector removal requires special tools (CO meter, tachometer)."
  },
  {
    id: 27,
    category: "Scenarios",
    difficulty: "medium",
    question: "A customer wants a repair estimate. What should you use?",
    options: [
      "Guess based on experience",
      "Owner's manual",
      "Flat rate manual",
      "Wall chart"
    ],
    correct: 2,
    explanation: "Use the flat rate manual to calculate labor time and provide accurate cost estimates."
  },
  {
    id: 28,
    category: "Scenarios",
    difficulty: "easy",
    question: "You've spilled oil on the workshop floor. What should you do?",
    options: [
      "Leave it for the cleaner",
      "Clean it up immediately",
      "Put a cone nearby",
      "Ignore it if it's small"
    ],
    correct: 1,
    explanation: "Clean spills immediately to prevent slips and maintain a safe work area."
  },
  {
    id: 29,
    category: "Scenarios",
    difficulty: "hard",
    question: "A manufacturer issues a recall for a serious brake fault. What type of bulletin is this?",
    options: [
      "Technical bulletin",
      "Technical tip",
      "Recall action bulletin",
      "Service reminder"
    ],
    correct: 2,
    explanation: "Recall action bulletins are used for serious faults that affect safety."
  },
  {
    id: 30,
    category: "Scenarios",
    difficulty: "medium",
    question: "You need tyre pressure info for multiple vehicle models. Where's the quickest place to look?",
    options: [
      "Each vehicle's owner manual",
      "Wall chart in the workshop",
      "Service manual for each model",
      "Online search for each"
    ],
    correct: 1,
    explanation: "Wall charts provide quick reference for common information like tyre pressures across multiple models."
  }
];