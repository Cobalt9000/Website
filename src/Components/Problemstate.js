import React, { useState } from 'react';
import './css/Problemstate.css';

const Track = () => {
  const [activeTab, setActiveTab] = useState('AI&ML');
  const [activeSubTab, setActiveSubTab] = useState('AI&ML_1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setActiveSubTab(`${tabName}_1`);
  };

  const handleSubTabClick = (subTabName) => {
    const [mainTab, subTabIndex] = subTabName.split('_');
    setActiveTab(mainTab);
    setActiveSubTab(subTabName);
  
    const subTabElements = document.querySelectorAll(`.sub-tab-contents[id^="${mainTab}_"]`);
    subTabElements.forEach((element) => {
      element.classList.remove('active-sub-tab');
    });
  
    const activeSubTabElement = document.getElementById(subTabName);
    if (activeSubTabElement) {
      activeSubTabElement.classList.add('active-sub-tab');
    }
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="ps">
            <h1 className="subtitle">Problem Statements</h1>
            <br></br>
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === 'AI&ML' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('AI&ML')}
              >
                AI & ML
              </p>
              <p
                className={`tab-links ${activeTab === 'CyberIntelligence' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('CyberIntelligence')}
              >
                Cyber Intelligence
              </p>
              <p
                className={`tab-links ${activeTab === 'arvr' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('arvr')}
              >
                Game & AR/VR
              </p>
              <p
                className={`tab-links ${activeTab === 'web3' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('web3')}
              >
                Web 3.0
              </p>
            </div>
            
            <div className={`tab-contents ${activeTab === 'AI&ML' ? 'active-tab' : ''}`} id="AI&ML">
            <div>
              <p
                className={`tab-links ${activeSubTab === 'AI&ML_1' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('AI&ML_1')}
              >
                Problem Statement 1
              </p>
              <p
                className={`tab-links ${activeSubTab === 'AI&ML_2' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('AI&ML_2')}
              >
                Problem Statement 2
              </p>
              <p
                className={`tab-links ${activeSubTab === 'AI&ML_3' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('AI&ML_3')}
              >
                Problem Statement 3
              </p>
              <p
                className={`tab-links ${activeSubTab === 'AI&ML_4' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('AI&ML_4')}
              >
                Problem Statement 4
              </p>
              <p
                className={`tab-links ${activeSubTab === 'AI&ML_5' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('AI&ML_5')}
              >
                Problem Statement 5
              </p>
            </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'AI&ML_1' ? 'active-sub-tab' : ''}`}
                id="AI&ML_1"
              >
                <p><span>Title: </span> Algorithmic Underwriting for Insurance with Generative AI in Banking, Financial Services, and Insurance (BFSI)</p>
                <p><span>Description: </span> 
                In the BFSI sector, accurate risk assessment and underwriting are critical for insurance providers to determine appropriate premiums and mitigate potential losses. 
                Traditional underwriting processes often rely on manual analysis of complex data, which can be time-consuming, subjective, and prone to human error. 
                The goal of this hackathon is to develop a generative AI solution that leverages advanced algorithms and machine learning techniques to streamline and enhance the underwriting process. 
                Additionally, implement a federated learning framework to enable collaborative model training across multiple insurance providers without sharing sensitive data, addressing privacy concerns.</p>
                <p><span>Possible Solution: </span> 
                Data Ingestion and Preprocessing: Develop a robust system to ingest and preprocess various data sources relevant to the underwriting process, including structured and unstructured data formats.
                Feature Engineering and Risk Modeling: Implement advanced feature engineering techniques to extract relevant risk factors from the ingested data. Develop machine learning models to assess risk and predict the likelihood of claims based on these features.
                Generative AI for Underwriting Recommendations: Leverage generative AI models to generate personalized underwriting recommendations, including risk assessments, premium calculations, and policy terms and conditions.
                Explainable AI and Regulatory Compliance: Ensure that the AI system's decision-making process is transparent, explainable, and compliant with relevant regulations.
                Federated Learning Framework: Implement a federated learning framework to enable collaborative model training across multiple insurance providers without sharing sensitive data, addressing privacy concerns.</p>
                
              </div>
        
              <div
                className={`sub-tab-contents ${activeSubTab === 'AI&ML_2' ? 'active-sub-tab' : ''}`}
                id="AI&ML_2"
              >
                <p><span>Title: </span> Harnessing Generative AI to Streamline IP Analysis for Legal Teams</p>
                <p><span>Description: </span> Intellectual property (IP) analysis is a crucial task for legal teams, involving the review and assessment of patents, trademarks, copyrights, and other IP-related documents. 
                However, this process can be time-consuming and resource-intensive, often requiring legal professionals to sift through large volumes of complex technical and legal documentation.
                The goal of this hackathon is to develop a generative AI solution that can streamline and enhance the IP analysis process for legal teams. The solution should leverage state-of-the-art language models and natural language processing techniques 
                to accurately extract relevant information from IP documents, summarize key findings, and generate actionable insights.
                </p>
                <p><span>Possible Solution: </span> 
                Automated Document Ingestion and Processing: Develop a robust system to ingest and preprocess various types of IP documents, including patents, trademarks, copyrights, and legal filings, from diverse sources and formats.
                Key Information Extraction: Implement advanced natural language processing techniques to accurately extract critical information from IP documents, such as claims, prior art references, legal arguments, and key technical details.
                Summarization and Insight Generation: Leverage generative AI models to summarize the extracted information, highlight key findings, and generate actionable insights for legal professionals, such as identifying potential infringement risks, 
                evaluating the strength of IP portfolios, or assessing the novelty and non-obviousness of inventions.
                Interactive Query Interface: Develop an intuitive user interface that allows legal professionals to interact with the AI system, submit queries, and receive tailored responses based on the analyzed IP documents.
                Continuous Learning and Adaptation: Incorporate mechanisms for continuous learning and adaptation, enabling the AI system to improve its performance over time by leveraging feedback from legal professionals and expanding its knowledge base with new IP data.
                Explainability and Transparency: Ensure that the AI system's decision-making process is transparent and explainable, providing legal professionals with clear justifications and evidence for the generated insights.
                Security and Privacy Considerations: Implement robust security measures to protect the confidentiality and integrity of sensitive IP data and ensure compliance with relevant data privacy regulations.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'AI&ML_3' ? 'active-sub-tab' : ''}`}
                id="AI&ML_3"
              >
                <p><span>Title: </span> Identification Of Illegal Hoardings in the city 🏙</p>
                <p><span>Description: </span> Identification of Illegal Hoardings in City of Bengaluru: To employ artificial intelligence and 
                computer vision to detect and report unauthorized hoardings and billboards in Bengaluru, ensuring compliance with city regulations and improving urban aesthetics.
                </p>
                <p><span>Possible Solution: </span> Data Collection- Gather a comprehensive dataset of images of authorized and unauthorized hoardings from various areas within the city. 
                Include images taken from different angles, lighting conditions, and weather conditions to train the AI model effectively. 
                Machine Learning Model: Develop a machine learning model, preferably a convolutional neural network (CNN), to analyze and classify images as either authorized or unauthorized hoardings. 
                Train the model using the collected dataset, continually refining it to improve accuracy.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'AI&ML_4' ? 'active-sub-tab' : ''}`}
                id="AI&ML_4"
              >
                <p><span>Title: </span> Accurate Medical Concept Extraction from Clinical Notes ⚕</p>
                <p><span>Description: </span> 
                Develop a custom LLM capable of accurately extracting and interpreting medical concepts, such as diagnoses, symptoms, and treatments, 
                from unstructured clinical notes. The LLM should be fine-tuned on a diverse corpus of electronic health records (EHRs) and medical literature, 
                and should be able to handle domain-specific terminology, abbreviations, and contextual nuances. Furthermore, you are provided with multiple prompting challenges on the hack day 
                which must ensure the LLM must not reveal SPIIs and other sensitive data in its response. Information on datasets and compute resources will be provided soon.</p>
                <p><span>Possible Solution: </span> 
                Preprocess and fine-tune a transformer-based language model, like GPT-3 or PubMedBERT, on a large corpus of anonymized EHRs and medical literature, incorporating domain-specific pretraining objectives.
                Develop advanced prompting strategies, including prompt ensembling, tuning, and clustering, to guide the LLM towards accurate medical concept extraction and interpretation.
                Implement context-aware attention mechanisms to capture nuances and disambiguate medical terminology based on context.
                Incorporate privacy-preserving techniques, such as differential privacy or secure multi-party computation, to prevent the LLM from revealing sensitive information during inference.
                Continuously fine-tune and update the LLM as new medical data becomes available, ensuring it stays current with evolving medical knowledge and terminology.
                </p>
                
              </div>
           
              <div
                className={`sub-tab-contents ${activeSubTab === 'AI&ML_5' ? 'active-sub-tab' : ''}`}
                id="AI&ML_5"
              >
                <p><span>Title: </span> Develop an open-source AI-based mobile app data scraper</p>
                <p><span>Description: </span>
                Many companies now offer services and products exclusively through mobile apps without traditional websites, presenting challenges for data collection and analysis. 
                This hackathon aims to develop an open-source, AI-based mobile app data scraper that can extract relevant data from apps with user consent and privacy preservation.
                The scraper should navigate app interfaces using computer vision and AI, intelligently identify and extract data through NLP and information extraction techniques, 
                structure extracted data, handle cross-platform compatibility, ensure scalability and efficiency, and incorporate secure user consent and authorization mechanisms. 
                Bonus task: Target a particular app and build a Tableau-like dashboard.</p>
                <p><span>Possible Solution: </span> 
                Modular architecture for consent management, app navigation, data extraction, and structuring.
                Utilize AI agents for app interface interaction, mimicking human behavior.
                Computer vision and machine learning for interface navigation and element recognition.
                NLP and information extraction algorithms for intelligent data extraction and structuring.
                Secure authentication and authorization for user consent and data access control.
                Cross-platform compatibility across mobile platforms and app architectures.
                Optimization for scalability and efficiency through parallel processing, caching, rate-limiting.
                Open-source community development with documentation, guidelines, and collaboration.
                </p>
                
              </div>
            </div>
            
            <div className={`tab-contents ${activeTab === 'CyberIntelligence' ? 'active-tab' : ''}`} id="CyberIntelligence">
            <div>
              <p
                className={`tab-links ${activeSubTab === 'CyberIntelligence_1' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('CyberIntelligence_1')}
              >
                Problem Statement 1
              </p>
              <p
                className={`tab-links ${activeSubTab === 'CyberIntelligence_2' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('CyberIntelligence_2')}
              >
                Problem Statement 2
              </p>
              <p
                className={`tab-links ${activeSubTab === 'CyberIntelligence_3' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('CyberIntelligence_3')}
              >
                Problem Statement 3
              </p>
              <p
                className={`tab-links ${activeSubTab === 'CyberIntelligence_4' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('CyberIntelligence_4')}
              >
                Problem Statement 4
              </p>
              <p
                className={`tab-links ${activeSubTab === 'CyberIntelligence_5' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('CyberIntelligence_5')}
              >
                Problem Statement 5
              </p>
            </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'CyberIntelligence_1' ? 'active-sub-tab' : ''}`}
                id="CyberIntelligence_1"
              >
                <p><span>Title: </span> Securing Software Supply Chains and Detecting Malicious Code</p>
                <p><span>Description: </span> Develop a comprehensive solution to identify and eliminate malicious code, including backdoors, viruses, trojans, spyware, wipers, and timebombs, 
                from the software supply chain. This solution should address vulnerabilities that allow attackers to insert such code and compromise the integrity of software applications. </p>
                <p><span>Possible Solution: </span>
                Implement a multi-layered approach that combines static and dynamic code analysis techniques. Static analysis can identify suspicious code patterns during development, 
                while dynamic analysis can detect malicious behavior at runtime.
                Integrate machine learning algorithms trained on large datasets of known malicious code to automatically flag suspicious code snippets.
                Leverage cryptographic signing and verification techniques to ensure the authenticity and integrity of software packages throughout the supply chain.
                Implement continuous monitoring of deployed software to detect and respond to potential threats promptly.
                </p>
                
              </div>
      
    
              <div
                className={`sub-tab-contents ${activeSubTab === 'CyberIntelligence_2' ? 'active-sub-tab' : ''}`}
                id="CyberIntelligence_2"
              >
                <p><span>Title: </span> Securing Web3 Transactions and Smart Contracts</p>
                <p><span>Description: </span> The widespread adoption of Web3 technologies introduces novel security challenges. 
                Malicious actors target blockchain networks with fraudulent transactions and exploit vulnerabilities in smart contracts. 
                This hackathon seeks innovative solutions to address the following challenges and bolster Web3 security: 
                Real-time Blockchain Transaction Threat Detection (Mempool Analysis): Develop a system that continuously monitors the mempool (unverified transactions) and 
                identifies potential threats using advanced detection algorithms and machine learning. 
                The solution should: Analyze transaction patterns and identify anomalies. Classify transactions as benign or malicious. Integrate with alerting systems and mitigation strategies. 
                Continuously update models based on new data and feedback. Smart Contract Vulnerability Detection (AST-based Analysis): 
                Design a tool that automatically scans smart contract code (using Abstract Syntax Trees) for vulnerabilities and attack patterns.  The solution should leverage:
                Static and dynamic analysis techniques (symbolic execution, taint analysis, fuzz testing)
                Machine learning models for vulnerability detection.
                Industry-standard vulnerability databases.
                Generate detailed vulnerability reports with mitigation strategies.
                Integrate seamlessly with popular development environments for early detection and remediation.
                </p>
                <p><span>Possible Solution: </span> 
                Both challenges can benefit from a modular approach with common elements:
                Data Acquisition: Continuously monitor blockchain networks (mempool for transactions, smart contract code for vulnerabilities).
                Data Preprocessing: Extract relevant features for analysis (transaction data, smart contract code structure).
                Threat Detection Engine: Utilize machine learning models trained on historical data to identify anomalies and potential threats.
                Alerting and Mitigation: Integrate with systems to notify users and implement mitigation strategies.
                Continuous Improvement: Update models or tool with new data and feedback to improve accuracy.</p>
                
              </div>
          
              <div
                className={`sub-tab-contents ${activeSubTab === 'CyberIntelligence_3' ? 'active-sub-tab' : ''}`}
                id="CyberIntelligence_3"
              >
                <p><span>Title: </span> Continuous Attack Surface Monitoring and Vulnerability Tracking</p>
                <p><span>Description: </span> Develop a solution to continuously monitor and track an organization's digital attack surface, including websites, network ranges, and other assets. 
                The system should leverage open-source tools to scan for vulnerabilities across these assets, store identified vulnerabilities in a centralized database, and provide real-time updates 
                when new vulnerabilities or asset changes are detected.</p>
                <p><span>Possible Solution: </span> Asset Discovery: Implement mechanisms to discover and maintain an up-to-date inventory of an organization's digital assets, including websites, IP ranges, and cloud resources.
                Vulnerability Scanning: Integrate open-source vulnerability scanning tools to identify and assess vulnerabilities across the monitored assets.
                Vulnerability Database: Develop a centralized database to store and manage identified vulnerabilities, including details such as severity, affected assets, and remediation steps.
                Continuous Monitoring: Implement a continuous monitoring process to regularly scan for new vulnerabilities and asset changes, ensuring the database remains up-to-date.
                Real-time Alerting: Incorporate real-time alerting mechanisms to notify security teams of newly discovered vulnerabilities or critical asset changes.
                Reporting and Analytics: Provide comprehensive reporting and analytics capabilities to track vulnerability trends, prioritize remediation efforts, and measure the effectiveness of the monitoring solution.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'CyberIntelligence_4' ? 'active-sub-tab' : ''}`}
                id="CyberIntelligence_4"
              >
                <p><span>Title: </span> Dark Web Reconnaissance and Data Breach Monitoring</p>
                <p><span>Description: </span> 
                Develop a solution to perform reconnaissance on the dark web and other data sources, such as hacked databases and logs, 
                to gather intelligence about potential data breaches and exposure of sensitive information. The system should allow users to search for specific identifiers 
                (e.g., email addresses, names, or company names) and provide a comprehensive report on any exposed data, including passwords, personal details, 
                or sensitive information found across these sources.</p>
                <p><span>Possible Solution: </span> 
                Data Source Integration: Implement mechanisms to securely access and scrape relevant data sources on the dark web, hacked databases, and other underground forums or marketplaces.
                Data Parsing and Indexing: Develop techniques to parse and index the collected data, extracting relevant information such as email addresses, passwords, personal details, and other sensitive data.
                Search and Query Engine: Create a search and query engine that allows users to input specific identifiers (e.g., email addresses, names, or company names) and retrieve any associated exposed data.
                Data Enrichment: Incorporate data enrichment techniques to correlate and aggregate information from multiple sources, providing a comprehensive view of an individual's or organization's digital footprint and potential exposure.
                Reporting and Visualization: Generate detailed reports and visualizations to present the gathered intelligence in a clear and actionable manner, highlighting potential risks and areas of concern.
                Ongoing Monitoring: Implement mechanisms for continuous monitoring and alerting, notifying users of new data breaches or exposures as they are discovered.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'CyberIntelligence_5' ? 'active-sub-tab' : ''}`}
                id="CyberIntelligence_5"
              >
                <p><span>Title: </span> Develop secure End-to-end Production AI system solutions</p>
                <p><span>Description: </span>
                Develop a comprehensive solution to secure the entire machine learning (ML) workflow, from data ingestion and ETL (Extract, Transform, Load) processes to model inference, ensuring the protection of sensitive data and model weights. 
                The solution should address potential vulnerabilities and threats that could compromise the integrity, confidentiality, and availability of data and models throughout the ML lifecycle. 
                The solution should provide tools or services to safeguard production AI engines that monitor various possible attack surfaces and prevent system jailbreaks.</p>
                <p><span>Possible Solution: </span> 

                Data Ingestion and ETL Security: 
                Implement robust access controls and authentication mechanisms for data sources. Ensure secure data transfer protocols and encryption for data in transit. Validate and sanitize input data to prevent injection attacks and data poisoning.
                Data Storage and Processing Security: Encrypt sensitive data at rest using industry-standard encryption algorithms. Implement secure key management and rotation practices. Enforce least privilege principles and role-based access controls for data access.
                Model Training and Deployment Security: Secure the model training environment, including infrastructure and code repositories. Implement secure model versioning and artifact management. Encrypt model weights and parameters during storage and transfer.
                Model Inference and Serving Security: Secure the model serving infrastructure and APIs. Implement input validation and sanitization for inference requests. Monitor and log inference requests for anomaly detection and auditing. 
                Continuous Security Monitoring and Incident Response: Implement continuous security monitoring and logging mechanisms across the ML pipeline. Develop incident response and mitigation plans for potential security breaches or anomalies. Regularly perform security audits and penetration testing.
                Compliance and Regulatory Considerations: Ensure the ML pipeline adheres to relevant data privacy and security regulations (e.g., GDPR, HIPAA, PCI-DSS). Implement data governance and lineage tracking mechanisms.
                </p>
                
              </div>
            </div>
            <div className={`tab-contents ${activeTab === 'arvr' ? 'active-tab' : ''}`} id="arvr">
            <div>
              <p
                className={`tab-links ${activeSubTab === 'arvr_1' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('arvr_1')}
              >
                Problem Statement 1
              </p>
              <p
                className={`tab-links ${activeSubTab === 'arvr_2' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('arvr_2')}
              >
                Problem Statement 2
              </p>
              <p
                className={`tab-links ${activeSubTab === 'arvr_3' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('arvr_3')}
              >
                Problem Statement 3
              </p>
              <p
                className={`tab-links ${activeSubTab === 'arvr_4' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('arvr_4')}
              >
                Problem Statement 4
              </p>
              <p
                className={`tab-links ${activeSubTab === 'arvr_5' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('arvr_5')}
              >
                Problem Statement 5
              </p>
            </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'arvr_1' ? 'active-sub-tab' : ''}`}
                id="arvr_1"
              >
                <p><span>Title: </span> Leveraging Open-Source Games for Social Impact</p>
                <p><span>Description: </span> This statement explores the potential of open-source games to address social issues and promote positive change. It highlights the importance of community and societal support in achieving this goal.
                 </p>
                <p><span>Possible Solution: </span>
                Design and develop open-source games that tackle real-world challenges like climate change, poverty, or public health issues. These games could raise awareness, educate players, and encourage them to take action in the real world. Building a strong community around these games through open-source development would allow for wider participation, iteration, and impact.
                </p>
                
            </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'arvr_2' ? 'active-sub-tab' : ''}`}
                id="arvr_2"
              >
                <p><span>Title: </span> Data Protection and Privacy in Augmented Reality</p>
                <p><span>Description: </span> This problem statement identifies the need to ensure data security and user privacy in virtual reality (VR) environments. 
                VR experiences often collect and use personal data, raising concerns about potential misuse.
                </p>
                <p><span>Possible Solution: </span> 
                Develop privacy-preserving protocols and regulations for VR applications. This could involve giving users more control over their data, 
                anonymizing data collection, and implementing strong security measures to protect user information.
                </p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'arvr_3' ? 'active-sub-tab' : ''}`}
                id="arvr_3"
              >
                <p><span>Title: </span>Gamified Resource Management for Sustainable Households</p>
                <p><span>Description: </span>This proposal outlines a gamified system designed to promote responsible consumption of essential resources within a domestic setting.
                 The system leverages gamification principles to motivate users towards sustainable practices in water, electricity, and gas usage.
                </p>
                <p><span>Possible Solution: </span> Develop a smart home application or integrate with existing smart home systems to track real-time resource consumption data (water, electricity, gas).
                Implement game mechanics such as a point system awarding points for exceeding conservation goals.
                Design a badge system where users unlock badges for achieving milestones in resource conservation.
                Create leaderboards to foster friendly competition among users within a household or across neighboring communities.
                Introduce in-app challenges that encourage users to adopt specific sustainable practices, such as taking shorter showers or utilizing energy-efficient appliances.
                </p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'arvr_4' ? 'active-sub-tab' : ''}`}
                id="arvr_4"
              >
                <p><span>Title: </span> VR Training for Emergency Response and public awarness: Simulating Disasters for Realistic Preparedness</p>
                <p><span>Description: </span> 
                This statement proposes using virtual reality (VR) technology to create training simulations for emergency responders. These simulations would realistically replicate disaster scenarios, 
                allowing responders to practice their skills and improve preparedness.
                </p>
                <p><span>Possible Solution: </span> 
                Develop VR training programs that simulate various disaster situations, such as earthquakes, floods, or fires. These can be interactive games that simulate emergency scenarios (e.g., earthquakes, floods) 
                and educate users on evacuation routes, first aid, and disaster resilience OR simulations could incorporate realistic environments, virtual characters, and decision-making challenges to provide emergency 
                responders with immersive and effective training experiences.
              </p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'arvr_5' ? 'active-sub-tab' : ''}`}
                id="arvr_5"
              >
                <p><span>Title: </span> Gamified Digitization and Archival Workflows for Cultural Heritage Preservation.</p>
                <p><span>Description: </span>
                Enhancing engagement in digitization and archival processes is crucial for preserving cultural heritage and making historical records accessible. 
                Traditional methods often struggle to maintain the motivation and meticulous attention required for these tasks.
                </p>
                <p><span>Possible Solution: </span> 

                Designing gamified workflows that encourage archivists and professionals to meticulously digitize and categorize historical records. 
                This approach involves incorporating elements of gamification, such as rewards, challenges, progress tracking, and leaderboards, into the digitization and archival processes. 
                By creating an engaging and interactive experience, the solution aims to foster increased participation, motivation, and attention to detail among archivists. 
                The gamified workflows can include features like achievement badges, point systems, and social sharing, creating a sense of accomplishment and friendly competition. Ultimately, 
                the solution seeks to leverage the power of gamification to preserve cultural heritage effectively by promoting the digitization and proper categorization of historical records.
                </p>
                
              </div>
            </div>
            <div className={`tab-contents ${activeTab === 'web3' ? 'active-tab' : ''}`} id="web3">
            <div>
              <p
                className={`tab-links ${activeSubTab === 'web3_1' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('web3_1')}
              >
                Problem Statement 1
              </p>
              <p
                className={`tab-links ${activeSubTab === 'web3_2' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('web3_2')}
              >
                Problem Statement 2
              </p>
              <p
                className={`tab-links ${activeSubTab === 'web3_3' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('web3_3')}
              >
                Problem Statement 3
              </p>
              <p
                className={`tab-links ${activeSubTab === 'web3_4' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('web3_4')}
              >
                Problem Statement 4
              </p>
              <p
                className={`tab-links ${activeSubTab === 'web3_5' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('web3_5')}
              >
                Problem Statement 5
              </p>
            </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'web3_1' ? 'active-sub-tab' : ''}`}
                id="web3_1"
              >
                <p><span>Title: </span> Efficient Zero-Knowledge Proofs for Scalable Smart Contract Adoption</p>
                <p><span>Description: </span> The integration of efficient zero-knowledge proofs (ZKPs) into smart contract platforms is crucial for enhancing privacy and security. However, the computational complexity and gas costs associated with ZKP integration can significantly impact the overall transaction throughput and network performance, limiting the widespread adoption of this technology.
                Develop a solution that can seamlessly integrate efficient ZKP mechanisms into smart contract platforms, ensuring that the integration does not significantly impact the overall transaction throughput or gas costs. The goal is to create a ZKP framework that can be easily adopted by developers, offering a balance between privacy, security, and scalability.
                </p>
                <p><span>Possible Solution: </span>
                Optimized ZKP Algorithms: Implement advanced ZKP algorithms, such as SNARKs or STARKs, to provide efficient, privacy-preserving proofs.
                Lightweight ZKP Execution Environment: Design a specialized execution environment to efficiently handle the generation and verification of ZKPs.
                Gas Cost Optimization: Explore techniques to minimize the gas costs associated with ZKP integration, such as data compression or off-chain computation.
                Developer Library: A user-friendly ZKP library offering high-level abstractions and intuitive functionalities for easy integration with smart contracts.
                Scalable Architecture: Ensure the ZKP solution can scale to handle increasing transaction volumes and network demands.</p>
                
            </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'web3_2' ? 'active-sub-tab' : ''}`}
                id="web3_2"
              >
                <p><span>Title: </span> Decentralized Sex Offender and Fraud Registry</p>
                <p><span>Description: </span> In many jurisdictions, the public often lacks easy access to comprehensive and up-to-date information about registered sex offenders and individuals convicted of fraud-related crimes. This lack of transparency can put communities at risk and undermine efforts to protect vulnerable populations.
                </p>
                <p><span>Possible Solution: </span> 
                Mobile App with Carbon Footprint Calculator: Develop a user-friendly mobile app integrating a basic carbon footprint calculator for individuals and organizations to estimate their emissions.
                Tokenized Carbon Credits on Blockchain: Implement a smart contract on a blockchain testnet to mint and trade a limited number of test carbon credit tokens, representing verifiable carbon offsets.
                Transparent Tracking & Global Accessibility: Utilize blockchain technology to ensure the transparency and immutability of carbon credit data, fostering trust and enabling a globally accessible platform for broader participation in carbon offsetting.
                User Dashboard & Incentive System (Future Development): Design a user dashboard to display personal carbon footprint and allow users to "purchase" (within the testnet) tokenized carbon credits to offset their footprint. Additionally, consider future development of a reward system incentivizing users to adopt sustainable practices that demonstrably reduce their carbon footprint.
                </p>
                
              </div>
           
              <div
                className={`sub-tab-contents ${activeSubTab === 'web3_3' ? 'active-sub-tab' : ''}`}
                id="web3_3"
              >
                <p><span>Title: </span>Reimagining Knowledge: A Decentralized, Community-Driven Information Platform</p>
                <p><span>Description: </span> Wikipedia, a cornerstone of online information access, faces challenges in maintaining neutrality and combating bias.  Centralized control and reliance on editor reputation can hinder diverse representation and lead to information manipulation, as highlighted in the Lex Fridman and Balaji podcast discussion.

                The limitations of centralized information platforms like Wikipedia necessitate a next-generation solution built on Web 3.0 principles. This new platform should address these issues by employing: Decentralized Governance, shifting editorial control from a single entity to a distributed network of users.  Consensus-Driven Curation would be fostered through a robust mechanism (to be determined) for collaboratively validating information accuracy and resolving disputes.  To Incentivize Diverse Participation, the platform would reward users for contributing credible information and actively engaging in the governance process. Finally, Transparency and Immutability would be maintained by leveraging blockchain technology to ensure the information record remains uncensored and verifiable.</p>
                <p><span>Possible Solution: </span> Tokenized Reputation System: Implement a tokenized reputation system where users earn tokens for contributing high-quality information and participating in governance.
                DAO-based Governance: Explore the use of Decentralized Autonomous Organizations (DAOs) to create a community-driven governance structure for platform decision-making.
                Sybil Resistance Mechanisms: Develop mechanisms to prevent Sybil attacks, where malicious actors attempt to gain undue influence by creating fake user accounts.
                Incentivized Fact-Checking: Implement a system where users can earn tokens for fact-checking and verifying the accuracy of information submitted by others.</p>
                
              </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'web3_4' ? 'active-sub-tab' : ''}`}
                id="web3_4"
              >
                <p><span>Title: </span> Democratizing Web3 Access- A Phone-Centric Wallet with Seamless User Experience</p>
                <p><span>Description: </span> 
                Current crypto wallets often require complex seed phrases or private keys, creating a barrier to entry for the average user. Additionally, traditional KYC (Know Your Customer) processes can be cumbersome and deter new entrants to the Web3 space. 
                Integrating user experience (UX) elements commonly seen in successful mobile payment apps (like UPI) is also lacking in many crypto wallets, hindering mainstream adoption.
                </p>
                <p><span>Possible Solution: </span> 
                Phone Number-Based Login: Utilize phone numbers for account creation and authentication, simplifying the onboarding process for new users.
                Secure KYC with Phone Verification: Integrate with established KYC providers to leverage existing phone number verification infrastructure for a streamlined identity verification process.
                Machine Learning-Powered Intent Recognition: Employ Machine Learning (ML) to analyze user behavior and context, intelligently predicting user intent (transfer, swap, stake, etc.) and suggesting relevant actions within the wallet.
                UPI-Inspired Interface: Design a user-friendly interface inspired by successful mobile payment apps like UPI, ensuring an intuitive experience for both merchants and consumers when interacting with the Web3 ecosystem.
                </p>
                
              </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'web3_5' ? 'active-sub-tab' : ''}`}
                id="web3_5"
              >
                <p><span>Title: </span> Decentralized Platform for Transparent Carbon Offsetting and Global Impact.</p>
                <p><span>Description: </span>
                The current carbon credit market lacks transparency, accessibility, and data cohesion. This hinders effective climate action and discourages broader participation. 
                We need a system that incentivizes sustainable practices, fosters trust through transparent tracking, and empowers individuals and organizations to contribute to a global carbon market.
                </p>
                <p><span>Possible Solution: </span> 

                Mobile App with Carbon Footprint Calculator: Develop a user-friendly mobile app integrating a basic carbon footprint calculator for individuals and organizations to estimate their emissions.
                Tokenized Carbon Credits on Blockchain: Implement a smart contract on a blockchain testnet to mint and trade a limited number of test carbon credit tokens, representing verifiable carbon offsets.
                Transparent Tracking & Global Accessibility: Utilize blockchain technology to ensure the transparency and immutability of carbon credit data, fostering trust and enabling a globally accessible platform for broader participation in carbon offsetting.
                User Dashboard & Incentive System (Future Development): Design a user dashboard to display personal carbon footprint and allow users to "purchase" (within the testnet) tokenized carbon credits to offset their footprint. Additionally, 
                consider future development of a reward system incentivizing users to adopt sustainable practices that demonstrably reduce their carbon footprint.Mobile App with Carbon 
                Footprint Calculator: Develop a user-friendly mobile app integrating a basic carbon footprint calculator for individuals and organizations to estimate their emissions.
                Tokenized Carbon Credits on Blockchain: Implement a smart contract on a blockchain testnet to mint and trade a limited number of test carbon credit tokens, representing verifiable carbon offsets.
                Transparent Tracking & Global Accessibility: Utilize blockchain technology to ensure the transparency and immutability of carbon credit data, fostering trust and enabling a globally accessible platform for broader participation in carbon offsetting.
                User Dashboard & Incentive System (Future Development): Design a user dashboard to display personal carbon footprint and allow users to "purchase" (within the testnet) tokenized carbon credits to offset their footprint. Additionally, 
                consider future development of a reward system incentivizing users to adopt sustainable practices that demonstrably reduce their carbon footprint.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;