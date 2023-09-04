var express = require('express');
var router = express.Router();

const listItems = [
  {
    'id': "1",
    'title': "Continuous Integration (CI)",
    'description': "A development practice where code changes are automatically tested and integrated into the main code repository frequently, ensuring that software is consistently built and validated.",
    'reference': "Atlassian (2019). What is Continuous Integration | Atlassian.[online] Atlassian. Available at:https://www.atlassian.com/continuous-delivery/continuous-integration.",
  },
  {
    'id': "2",
    'title': "Continuous Delivery (CD)",
    'description': "An extension of CI, where code changes that pass automated testing are automatically deployed to production or staging environments, making the software delivery process more efficient and reliable.",
    'reference': " Wikipedia Contributors (2019). Continuous delivery. [online] Wikipedia. Available at: https://en.wikipedia.org/wiki/Continuous_delivery.",
  },
  {
    "id": 3,
    "title": "Infrastructure as Code (IaC)",
    "description": "The practice of managing and provisioning infrastructure using code and automation tools, allowing for consistent and reproducible environments.",
    "reference": "Wikipedia. (2022). Infrastructure as code. [online] Available at: https://en.wikipedia.org/wiki/Infrastructure_as_code#:~:text=Infrastructure%20as%20code%20(IaC)%20is."
  },
  {
    "id": 4,
    "title": "Microservices",
    "description": "An architectural approach where applications are broken down into small, independent services that can be developed, deployed, and scaled independently, promoting agility and scalability.",
    "reference": "AWS (2019). What are Microservices? | AWS. [online] Amazon Web Services, Inc. Available at: https://aws.amazon.com/microservices/."
  },
  {
    "id": 5,
    "title": "Containerization",
    "description": "A technology that allows applications and their dependencies to be packaged together as containers, ensuring consistent execution across different environments and simplifying deployment.",
    "reference": "www.redhat.com. (n.d.). What is containerization? [online] Available at: https://www.redhat.com/en/topics/cloud-native-apps/what-is-containerization."
  },
  {
    "id": 6,
    "title": "Continuous Monitoring",
    "description": "The practice of constantly monitoring applications, systems, and infrastructure to identify issues and gain insights into performance, security, and user behavior.",
    "reference": "crowdstrike.com. (n.d.). What Is Continuous Monitoring? - CrowdStrike. [online] Available at: https://www.crowdstrike.com/cybersecurity-101/observability/continuous-monitoring/#:~:text=Continuous%20monitoring%20is%20an%20approach."
  },
  {
    "id": 7,
    "title": "Version Control",
    "description": "A system that tracks changes to source code and other files, enabling collaboration among team members, rollback to previous versions, and overall code management.",
    "reference": "Atlassian (2019b). What is version control. [online] Atlassian. Available at: https://www.atlassian.com/git/tutorials/what-is-version-control."
  },
  {
    "id": 8,
    "title": "DevOps Pipeline",
    "description": "A system that automates the software delivery process, from code integration and testing to deployment and monitoring, facilitating collaboration and rapid iterations.",
    "reference": "Atlassian (n.d.). DevOps Pipeline. [online] Atlassian. Available at: https://www.atlassian.com/devops/devops-tools/devops-pipeline#:~:text=A%20DevOps%20pipeline%20is%20a."
  },
  {
    "id": 9,
    "title": "Configuration Management",
    "description": "The process of managing and maintaining the state of systems and applications by defining and enforcing their desired configurations.",
    "reference": "VMware. (2023). What is Configuration Management? [online] Available at: https://www.vmware.com/au/topics/glossary/content/configuration-management.html#:~:text=Configuration%20Management%20is%20the%20process"
  },
  {
    "id": 10,
    "title": "Orchestration",
    "description": "Coordinating and automating various tasks and services within the software development and deployment lifecycle to ensure smooth and efficient execution.",
    "reference": "Wikipedia. (2023). Orchestration. [online] Available at: https://en.wikipedia.org/wiki/Orchestration#:~:text=Orchestration%20is%20the%20study%20or"
  },
  {
    "id": 11,
    "title": "Automated Testing",
    "description": "Using scripts and tools to automate various testing processes.",
    "reference": "“Software Testing,” www.ibm.com. https://www.ibm.com/cloud/devops/software-testing?p1=Search&p4=43700074863639264&p5=e (accessed Aug. 06, 2023)."
  },
  {
    "id": 12,
    "title": "Monitoring and Observability",
    "description": "Collecting and analyzing data from systems and applications to ensure their health and performance.",
    "reference": "“DevOps measurement: Monitoring and observability,” Google Cloud. https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability"
  },
  {
    "id": 13,
    "title": "Incident Management",
    "description": "The process of identifying, responding to, and resolving incidents to minimize service disruptions.",
    "reference": "Atlassian, “Incident management best practices and tutorials,” Atlassian. https://www.atlassian.com/incident-management"
  },
  {
    "id": 14,
    "title": "Agile",
    "description": "A software development methodology emphasizing iterative and collaborative development.",
    "reference": "Wikipedia Contributors, “Agile software development,” Wikipedia, Dec. 04, 2018. https://en.wikipedia.org/wiki/Agile_software_development"
  },
  {
    "id": 15,
    "title": "Scrum",
    "description": "An Agile framework using short, time-boxed development cycles (sprints).",
    "reference": "Atlassian, “Scrum - What is it, how it works, & how to start,” Atlassian. https://www.atlassian.com/agile/scrum#:~:text=Scrum%20is%20an%20agile%20project"
  },
  {
    "id": 16,
    "title": "Kanban",
    "description": "An Agile approach visualizing and optimizing workflow on a kanban board.",
    "reference": "Atlassian, “Kanban - A brief introduction,” Atlassian. https://www.atlassian.com/agile/kanban#:~:text=In%20Japanese%2C%20kanban%20literally%20translates"
  },
  {
    "id": 17,
    "title": "A/B Testing",
    "description": "Experimenting with different versions of software to compare their performance.",
    "reference": "Wikipedia Contributors, “A/B testing,” Wikipedia, Nov. 18, 2019. https://en.wikipedia.org/wiki/A/B_testing"
  },
  {
    "id": 18,
    "title": "Feature Flagging",
    "description": "Gradually enabling or disabling features in software using configuration flags.",
    "reference": "“Feature Flags—What Are Those? Uses, Benefits & Best Practices,” LaunchDarkly. https://launchdarkly.com/blog/what-are-feature-flags/"
  },
  {
    "id": 19,
    "title": "Infrastructure Monitoring",
    "description": "Monitoring the health and performance of infrastructure.",
    "reference": "Datadog, “What is Infrastructure Monitoring? How it Works & Use Cases | Datadog,” What is Infrastructure Monitoring? How it Works & Use Cases, Jul. 20, 2021. https://www.datadoghq.com/knowledge-center/infrastructure-monitoring/"
  },
  {
    "id": 20,
    "title": "Capacity Planning",
    "description": "Estimating and planning resource requirements to meet future demand.",
    "reference": "Wikipedia Contributors, “Capacity planning,” Wikipedia, May 01, 2019. https://en.wikipedia.org/wiki/Capacity_planning"
  },
  {
    "id": "21",
    "title": "Artifact Repository",
    "description": " A centralized location where software artifacts, such as compiled code, libraries, and documentation, are stored and managed. Artifact repositories help teams manage versioning, distribution, and access to these components, facilitating a streamlined software development and deployment process.",
    "reference": "What is an Artifact Repository? | TeamCity CI/CD Guide,JetBrains. https://www.jetbrains.com/teamcity/ci-cd-guide/concepts/artifact-repository/#:~:text=An%20artifact%20repository%20provides%20a (accessed Aug. 25, 2023).",

  },
  {
    "id": "22",
    "title": "Deployment Automation",
    "description": "The process of automating the deployment of software applications to different environments, reducing manual errors and ensuring consistent deployments.",
    "reference": "What is deployment automation?, www.redhat.com. https://www.redhat.com/en/topics/automation/what-is-deployment-automation",
  },
  {
    "id": "23",
    "title": "Blue-Green Deployment",
    "description": "A deployment strategy where two identical environments (blue and green) are maintained, allowing for seamless switching between them to minimize downtime during releases.",
    "reference": "Blue/Green Deployments - Overview of Deployment Options on AWS, docs.aws.amazon.com. https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/bluegreen-deployments.html",
  },
  {
    "id": "24",
    "title": "Immutable Infrastructure",
    "description": "An approach where infrastructure components are treated as immutable and are never modified directly; instead, new instances are created with each change or update.",
    "reference": "What is immutable infrastructure? - Definition from WhatIs.com, SearchITOperations. https://www.techtarget.com/searchitoperations/definition/immutable-infrastructure#:~:text=Immutable%20infrastructure%20is%20an%20approach",
  },
  {
    "id": "25",
    "title": "Infrastructure as a Service (IaaS)",
    "description": "Cloud computing model where virtualized computing resources are provided over the internet, allowing users to manage and control their infrastructure.",
    "reference": "What is IaaS? Infrastructure as a Service | Microsoft Azure, azure.microsoft.com. https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-iaas",
  },
  {
    "id": "26",
    "title": "Platform as a Service (PaaS)",
    "description": "Cloud computing model that provides a platform and environment for developers to build, deploy, and manage applications without managing the underlying infrastructure.",
    "reference": "What Is PaaS?, Google Cloud. https://cloud.google.com/learn/what-is-paas#:~:text=Get%20the%20report-",
  },
  {
    "id": "27",
    "title": "Serverless Computing",
    "description": "A cloud computing model where developers can build and run applications without needing to manage the underlying server infrastructure, paying only for actual usage.",
    "reference": "Wikipedia Contributors,Serverless computing,Wikipedia, Jan. 06, 2020. https://en.wikipedia.org/wiki/Serverless_computing",
  },
  {
    "id": "28",
    "title": "Site Reliability Engineering (SRE)",
    "description": "A discipline that combines software engineering and systems administration to design, build, and maintain large-scale, reliable, and scalable systems.",
    "reference": "What is Site Reliability Engineering? - SRE Explained - AWS,Amazon Web Services, Inc. https://aws.amazon.com/what-is/sre/",
  },
  {
    "id": "29",
    "title": "Monitoring as Code",
    "description": "Treating infrastructure and application monitoring configurations as code, allowing them to be versioned, automated, and integrated into the DevOps pipeline.",
    "reference": "S. Porter, Monitoring as Code: What It Is and Why You Need It, The New Stack, Jan. 21, 2021. https://thenewstack.io/monitoring-as-code-what-it-is-and-why-you-need-it/ (accessed Aug. 25, 2023).",
  },
  {
    "id": "30",
    "title": "Failover",
    "description": "A mechanism that automatically switches from a failed system or component to a standby or redundant system to ensure high availability and reliability.",
    "reference": "What is a failover? Definition and related FAQs,www.druva.com. https://www.druva.com/glossary/what-is-a-failover-definition-and-related-faqs#:~:text=Failover%20is%20the%20ability%20to (accessed Aug. 25, 2023).",
  },
  {
    "id": "31",
    "title": "Immutable Deployment",
    "description": "A deployment strategy where a new version of an application or system is created and deployed as a whole, rather than modifying an existing instance, ensuring consistency and reliability.",
    "reference": "Netlify. (n.d.). What are Atomic deploys? Immutable deploys? Learn here! [online] Available at: https://www.netlify.com/blog/2021/02/23/terminology-explained-atomic-and-immutable-deploys/#:~:text=While%20a%20%22mutable%22%20item%20can [Accessed 4 Sep. 2023].",

  },
  {
    "id": "32",
    "title": "Chaos Engineering",
    "description": "A practice of intentionally introducing controlled failures and chaos into a system to identify weaknesses and vulnerabilities, helping teams build more resilient systems.",
    "reference": "“What is chaos engineering? Chaos engineering and its principles explained,” IT Operations. https://www.techtarget.com/searchitoperations/definition/chaos-engineering#:~:text=Chaos%20engineering%20is%20the%20process (accessed Sep. 04, 2023).",
  },
  {
    "id": "33",
    "title": "Docker Swarm",
    "description": "A native clustering and orchestration solution for Docker containers, allowing for easy scaling and management of containerized applications.",
    "reference": "“What is Docker Swarm?,” Sumo Logic. https://www.sumologic.com/glossary/docker-swarm/",
  },
  {
    "id": "34",
    "title": "Feature Flagging",
    "description": "A technique that allows developers to toggle features on and off in a live application, enabling controlled and gradual rollouts of new functionality and A/B testing.",
    "reference": "“Feature Flags—What Are Those? Uses, Benefits & Best Practices,” LaunchDarkly. https://launchdarkly.com/blog/what-are-feature-flags/",
  },
  {
    "id": "35",
    "title": "Infrastructure as Code (IaC) Tool",
    "description": "Software tools like Terraform and Ansible that enable the automated provisioning and management of infrastructure using code, improving infrastructure agility and reducing manual configuration.",
    "reference": "“Best Infrastructure as Code Tools (IaC): The Top 10 for 2022,” bluelight.co. https://bluelight.co/blog/best-infrastructure-as-code-tools",
  },
  {
    "id": "36",
    "title": "Release Pipeline",
    "description": "A set of automated steps and processes that code changes go through from development to production, including building, testing, and deploying, to ensure a reliable and repeatable release process.",
    "reference": "“Release Pipeline in DevOps -Professional-Devops.com,” www.professional-devops.com. https://www.professional-devops.com/release-pipeline.html#:~:text=A%20release%20pipeline%20is%20a",
  },
  {
    "id": "37",
    "title": "Log Aggregation",
    "description": "The process of collecting and centralizing log data from various sources and applications, making it easier to analyze and monitor system behavior and troubleshoot issues.",
    "reference": "Datadog, “Log Aggregation: What It Is & How It Works | Datadog,” Log Aggregation: What It Is & How It Works, Aug. 03, 2021. https://www.datadoghq.com/knowledge-center/log-aggregation/#:~:text=Log%20aggregation%20is%20the%20process",
  },
  {
    "id": "38",
    "title": "Scalability",
    "description": "The ability of a system, application, or infrastructure to handle increasing workloads and traffic by adding resources or nodes dynamically, ensuring performance and availability as demands grow.",
    "reference": "“Definition of Scalability - Gartner Information Technology Glossary,” Gartner. https://www.gartner.com/en/information-technology/glossary/scalability",
  },
  {
    "id": "39",
    "title": "Infrastructure Orchestration",
    "description": "The automated management and coordination of infrastructure components, often involving provisioning, configuring, and scaling resources in a synchronized manner.",
    "reference": "S. Work, “What is IT Infrastructure Orchestration,” Pliant - The Orchestration Platform, Oct. 27, 2022. https://pliant.io/what-is-it-infrastructure-orchestration/ (accessed Sep. 04, 2023).",
  },
  {
    "id": "40",
    "title": "Serverless Architecture",
    "description": "A cloud computing model where developers build and run applications without managing the underlying servers, focusing solely on writing code and letting the cloud provider handle infrastructure scaling and management.",
    "reference": "“Serverless Architectures,” Amazon Web Services, Inc. https://aws.amazon.com/lambda/serverless-architectures-learn-more/#:~:text=A%20serverless%20architecture%20is%20a",
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Software Deployment and Operation', subheading: "Example", list: listItems });
});

module.exports = router;
