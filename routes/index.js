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
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Software Deployment and Operation', subheading: "Example", list: listItems });
});

module.exports = router;
