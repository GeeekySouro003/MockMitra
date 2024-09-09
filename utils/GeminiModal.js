const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
    ChatSession,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_APP_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };


  async function run() {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "give questions and answer for salesforce admin role as a fresher in json format.give answer and question as field in json\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"question\": \"What is Salesforce and what are its key features?\",\n    \"answer\": \"Salesforce is a cloud-based software company that provides customer relationship management (CRM) service and also provides a complementary suite of enterprise applications focused on customer service, marketing automation, analytics, and application development. Some key features include: \\n\\n* **CRM:**  Managing customer interactions, tracking opportunities, and managing sales pipelines.\\n* **Customizability:** Allowing you to tailor the platform to your specific business needs through configurations and customizations.\\n* **Automation:** Automating tasks like sending emails, updating records, and generating reports to save time and improve efficiency.\\n* **Mobile Access:** Providing access to Salesforce data and functionality from mobile devices.\\n* **AppExchange:** Offering a marketplace of pre-built apps that extend Salesforce functionality.\"\n  },\n  {\n    \"question\": \"Explain the different types of Salesforce editions and their key differences.\",\n    \"answer\": \"Salesforce offers various editions catered to different business sizes and needs. Here are some common ones:\\n\\n* **Essentials:** Ideal for small businesses with basic CRM needs.\\n* **Professional:** Suitable for growing businesses requiring more advanced features like automation and reporting.\\n* **Enterprise:** Designed for larger organizations with complex sales processes and a need for advanced customization and collaboration.\\n* **Unlimited:** The most comprehensive edition offering maximum flexibility, storage, and support for large enterprises.\\n* **Pardot:** Focused on marketing automation, enabling you to manage leads, campaigns, and email marketing.\"\n  },\n  {\n    \"question\": \"What are the different types of objects in Salesforce and give examples of each?\",\n    \"answer\": \"Salesforce uses objects to represent data entities. Here are some common object types:\\n\\n* **Standard Objects:** Pre-built objects that come with Salesforce, such as Accounts, Contacts, Leads, Opportunities, and Cases. These are designed for common CRM functionalities.\\n* **Custom Objects:** Objects you create to store data specific to your business needs. For instance, you might create a custom object called 'Project' to track project details.\\n* **Lookup Relationships:** Connecting objects together, like associating a Contact with an Account or an Opportunity with a Lead.\\n* **Master-Detail Relationships:** Establishing a strong connection between two objects where the detail object depends on the master object for its existence. For example, a 'Product' object might be a detail object under a 'Product Line' master object.\"\n  },\n  {\n    \"question\": \"What are profiles and permission sets? How do they differ?\",\n    \"answer\": \"Both profiles and permission sets control user access to Salesforce data and functionalities. The key difference lies in their scope and granularity:\\n\\n* **Profiles:** Act as a template for user access. They provide a pre-defined set of permissions and access levels to various objects, fields, and functionalities. Profiles are typically used for broader user roles like Sales Representative or Marketing Manager.\\n* **Permission Sets:** Offer a more granular approach. You can create permission sets to assign specific permissions for a particular task or functionality. This allows you to control access to specific objects, fields, or features for specific users without changing their existing profile.\\n\\nFor example, you could create a profile for Sales Representatives and a permission set for a specific Sales Manager to access reports related to their team's performance.\"\n  },\n  {\n    \"question\": \"Explain the role of validation rules and workflow rules in Salesforce.\",\n    \"answer\": \"Validation rules and workflow rules are powerful tools for automating data integrity and process control:\\n\\n* **Validation Rules:** Ensure data quality by enforcing specific conditions on fields. If a validation rule is triggered, an error message appears to the user, preventing them from saving incorrect data. This can be used to prevent duplicate entries, enforce data formatting, or ensure specific fields are filled.\\n* **Workflow Rules:** Automate business processes triggered by specific events or conditions. They can perform actions like sending email notifications, updating fields, creating tasks, or routing records. This can streamline workflows, automate approvals, and improve efficiency.\"\n  },\n  {\n    \"question\": \"What is Apex code and how is it used in Salesforce?\",\n    \"answer\": \"Apex code is Salesforce's proprietary programming language. It is used to extend Salesforce functionality beyond what is available through standard configuration. Here are some common use cases:\\n\\n* **Customizing Business Logic:** Implementing complex business rules and logic that cannot be achieved through standard configuration.\\n* **Data Manipulation:** Creating custom triggers to manipulate data when records are created, updated, or deleted.\\n* **Integration with External Systems:** Integrating Salesforce with third-party applications and services using Apex code.\\n* **Creating Custom Web Services:** Exposing Salesforce data and functionality to external systems.\"\n  },\n  {\n    \"question\": \"What are Lightning Web Components (LWC)? Why are they important?\",\n    \"answer\": \"Lightning Web Components (LWC) are a modern framework for building user interfaces in Salesforce. They are based on web standards like HTML, CSS, and JavaScript, providing a more efficient and performant way to create custom components:\\n\\n* **Improved Performance:** LWCs leverage the browser's native capabilities, resulting in faster loading times and a smoother user experience.\\n* **Enhanced Developer Experience:** LWCs offer a familiar and modern development environment, making it easier for developers to build and maintain custom components.\\n* **Flexibility and Scalability:** LWCs provide a flexible and scalable approach to building user interfaces, making it easy to adapt to changing business requirements.\"\n  },\n  {\n    \"question\": \"What are some common challenges faced by Salesforce administrators?\",\n    \"answer\": \"Salesforce administration can present various challenges, including:\\n\\n* **Managing Complex User Permissions and Access:** Ensuring the right users have the appropriate permissions to access data and functionalities.\\n* **Customizing the Platform:** Understanding the business needs and translating them into effective configurations and customizations.\\n* **Troubleshooting and Problem Solving:** Diagnosing and resolving issues related to data integrity, user errors, and system performance.\\n* **Keeping Up with Updates:** Staying informed about Salesforce releases and new features, and adapting configurations and customizations to leverage new capabilities.\\n* **Data Migration and Integration:** Handling data migration from legacy systems and integrating Salesforce with other applications.\"\n  },\n  {\n    \"question\": \"How can you stay updated on Salesforce news and best practices?\",\n    \"answer\": \"To stay updated, you can utilize these resources:\\n\\n* **Salesforce Trailhead:** This online learning platform offers free courses and hands-on exercises to learn Salesforce concepts, skills, and best practices.\\n* **Salesforce Help Documentation:** Access comprehensive documentation, articles, and support resources for various Salesforce features and functionalities.\\n* **Salesforce Community Forums:** Engage with other Salesforce users, administrators, and developers to share knowledge, ask questions, and learn from experiences.\\n* **Salesforce Blogs and Webinars:** Follow Salesforce blogs and participate in webinars to stay informed about new releases, features, and industry trends.\\n* **Salesforce Developer Network:** Find technical documentation, API guides, and other resources to deepen your understanding of Salesforce development.\"\n  }\n]\n```"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  }
  export default ChatSession;