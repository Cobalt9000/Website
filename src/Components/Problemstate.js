import React, { useState } from 'react';
import './css/Problemstate.css';

const ProblemStatement = () => {
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
    <section className="Problem-Statements w-full max-w-3xl m-auto text-gray-100" data-section-name={"s-three"} id={"Problem-Statements"}> 
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="Problem-Statements">
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
                <br></br>
                <p><span>Description: </span> 
                In the BFSI sector, accurate risk assessment and underwriting are critical for insurance providers to determine appropriate premiums and mitigate potential losses. 
                Traditional underwriting processes often rely on manual analysis of complex data, which can be time-consuming, subjective, and prone to human error. 
                The goal of this hackathon is to develop a generative AI solution that leverages advanced algorithms and machine learning techniques to streamline and enhance the underwriting process. 
                Additionally, implement a federated learning framework to enable collaborative model training across multiple insurance providers without sharing sensitive data, addressing privacy concerns.</p>
                
              </div>
        
              <div
                className={`sub-tab-contents ${activeSubTab === 'AI&ML_2' ? 'active-sub-tab' : ''}`}
                id="AI&ML_2"
              >
                <p><span>Title: </span> Harnessing Generative AI to Streamline IP Analysis for Legal Teams</p>
                <br></br>
                <p><span>Description: </span> Intellectual property (IP) analysis is a crucial task for legal teams, involving the review and assessment of patents, trademarks, copyrights, and other IP-related documents. 
                However, this process can be time-consuming and resource-intensive, often requiring legal professionals to sift through large volumes of complex technical and legal documentation.
                The goal of this hackathon is to develop a generative AI solution that can streamline and enhance the IP analysis process for legal teams. The solution should leverage state-of-the-art language models and natural language processing techniques 
                to accurately extract relevant information from IP documents, summarize key findings, and generate actionable insights.
                </p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'AI&ML_3' ? 'active-sub-tab' : ''}`}
                id="AI&ML_3"
              >
                <p><span>Title: </span> Identification Of Illegal Hoardings in the city 🏙</p>
                <br></br>
                <p><span>Description: </span> Identification of Illegal Hoardings in City of Bengaluru: To employ artificial intelligence and 
                computer vision to detect and report unauthorized hoardings and billboards in Bengaluru, ensuring compliance with city regulations and improving urban aesthetics.
                </p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'AI&ML_4' ? 'active-sub-tab' : ''}`}
                id="AI&ML_4"
              >
                <p><span>Title: </span> Accurate Medical Concept Extraction from Clinical Notes ⚕</p>
                <br></br>
                <p><span>Description: </span> 
                Develop a custom LLM capable of accurately extracting and interpreting medical concepts, such as diagnoses, symptoms, and treatments, 
                from unstructured clinical notes. The LLM should be fine-tuned on a diverse corpus of electronic health records (EHRs) and medical literature, 
                and should be able to handle domain-specific terminology, abbreviations, and contextual nuances. Furthermore, you are provided with multiple prompting challenges on the hack day 
                which must ensure the LLM must not reveal SPIIs and other sensitive data in its response. Information on datasets and compute resources will be provided soon.</p>
                
              </div>
           
              <div
                className={`sub-tab-contents ${activeSubTab === 'AI&ML_5' ? 'active-sub-tab' : ''}`}
                id="AI&ML_5"
              >
                <p><span>Title: </span> Develop an open-source AI-based mobile app data scraper</p>
                <br></br>
                <p><span>Description: </span>
                Many companies now offer services and products exclusively through mobile apps without traditional websites, presenting challenges for data collection and analysis. 
                This hackathon aims to develop an open-source, AI-based mobile app data scraper that can extract relevant data from apps with user consent and privacy preservation.
                The scraper should navigate app interfaces using computer vision and AI, intelligently identify and extract data through NLP and information extraction techniques, 
                structure extracted data, handle cross-platform compatibility, ensure scalability and efficiency, and incorporate secure user consent and authorization mechanisms. 
                Bonus task: Target a particular app and build a Tableau-like dashboard.</p>
                
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
                <br></br>
                <p><span>Description: </span> Develop a comprehensive solution to identify and eliminate malicious code, including backdoors, viruses, trojans, spyware, wipers, and timebombs, 
                from the software supply chain. This solution should address vulnerabilities that allow attackers to insert such code and compromise the integrity of software applications. </p>
                
              </div>
      
    
              <div
                className={`sub-tab-contents ${activeSubTab === 'CyberIntelligence_2' ? 'active-sub-tab' : ''}`}
                id="CyberIntelligence_2"
              >
                <p><span>Title: </span> Securing Web3 Transactions and Smart Contracts</p>
                <br></br>
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
                 
              </div>
          
              <div
                className={`sub-tab-contents ${activeSubTab === 'CyberIntelligence_3' ? 'active-sub-tab' : ''}`}
                id="CyberIntelligence_3"
              >
                <p><span>Title: </span> Continuous Attack Surface Monitoring and Vulnerability Tracking</p>
                <br></br>
                <p><span>Description: </span> Develop a solution to continuously monitor and track an organization's digital attack surface, including websites, network ranges, and other assets. 
                The system should leverage open-source tools to scan for vulnerabilities across these assets, store identified vulnerabilities in a centralized database, and provide real-time updates 
                when new vulnerabilities or asset changes are detected.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'CyberIntelligence_4' ? 'active-sub-tab' : ''}`}
                id="CyberIntelligence_4"
              >
                <p><span>Title: </span> Dark Web Reconnaissance and Data Breach Monitoring</p>
                <br></br>
                <p><span>Description: </span> 
                Develop a solution to perform reconnaissance on the dark web and other data sources, such as hacked databases and logs, 
                to gather intelligence about potential data breaches and exposure of sensitive information. The system should allow users to search for specific identifiers 
                (e.g., email addresses, names, or company names) and provide a comprehensive report on any exposed data, including passwords, personal details, 
                or sensitive information found across these sources.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'CyberIntelligence_5' ? 'active-sub-tab' : ''}`}
                id="CyberIntelligence_5"
              >
                <p><span>Title: </span> Develop secure End-to-end Production AI system solutions</p>
                <br></br>
                <p><span>Description: </span>
                Develop a comprehensive solution to secure the entire machine learning (ML) workflow, from data ingestion and ETL (Extract, Transform, Load) processes to model inference, ensuring the protection of sensitive data and model weights. 
                The solution should address potential vulnerabilities and threats that could compromise the integrity, confidentiality, and availability of data and models throughout the ML lifecycle. 
                The solution should provide tools or services to safeguard production AI engines that monitor various possible attack surfaces and prevent system jailbreaks.</p>
                
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
                <br></br>
                <p><span>Description: </span> This statement explores the potential of open-source games to address social issues and promote positive change. It highlights the importance of community and societal support in achieving this goal.
                 </p>
                 
            </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'arvr_2' ? 'active-sub-tab' : ''}`}
                id="arvr_2"
              >
                <p><span>Title: </span> Data Protection and Privacy in Augmented Reality</p>
                <br></br>
                <p><span>Description: </span> This problem statement identifies the need to ensure data security and user privacy in virtual reality (VR) environments. 
                VR experiences often collect and use personal data, raising concerns about potential misuse.
                </p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'arvr_3' ? 'active-sub-tab' : ''}`}
                id="arvr_3"
              >
                <p><span>Title: </span>Gamified Resource Management for Sustainable Households</p>
                <br></br>
                <p><span>Description: </span>This proposal outlines a gamified system designed to promote responsible consumption of essential resources within a domestic setting.
                 The system leverages gamification principles to motivate users towards sustainable practices in water, electricity, and gas usage.
                </p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'arvr_4' ? 'active-sub-tab' : ''}`}
                id="arvr_4"
              >
                <p><span>Title: </span> VR Training for Emergency Response and public awarness: Simulating Disasters for Realistic Preparedness</p>
                <br></br>
                <p><span>Description: </span> 
                This statement proposes using virtual reality (VR) technology to create training simulations for emergency responders. These simulations would realistically replicate disaster scenarios, 
                allowing responders to practice their skills and improve preparedness.
                </p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'arvr_5' ? 'active-sub-tab' : ''}`}
                id="arvr_5"
              >
                <p><span>Title: </span> Gamified Digitization and Archival Workflows for Cultural Heritage Preservation.</p>
                <br></br>
                <p><span>Description: </span>
                Enhancing engagement in digitization and archival processes is crucial for preserving cultural heritage and making historical records accessible. 
                Traditional methods often struggle to maintain the motivation and meticulous attention required for these tasks.
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
                <br></br>
                <p><span>Description: </span> The integration of efficient zero-knowledge proofs (ZKPs) into smart contract platforms is crucial for enhancing privacy and security. However, the computational complexity and gas costs associated with ZKP integration can significantly impact the overall transaction throughput and network performance, limiting the widespread adoption of this technology.
                Develop a solution that can seamlessly integrate efficient ZKP mechanisms into smart contract platforms, ensuring that the integration does not significantly impact the overall transaction throughput or gas costs. The goal is to create a ZKP framework that can be easily adopted by developers, offering a balance between privacy, security, and scalability.
                </p>
                
            </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'web3_2' ? 'active-sub-tab' : ''}`}
                id="web3_2"
              >
                <p><span>Title: </span> Decentralized Sex Offender and Fraud Registry</p>
                <br></br>
                <p><span>Description: </span> In many jurisdictions, the public often lacks easy access to comprehensive and up-to-date information about registered sex offenders and individuals convicted of fraud-related crimes. This lack of transparency can put communities at risk and undermine efforts to protect vulnerable populations.
                </p>
                
              </div>
           
              <div
                className={`sub-tab-contents ${activeSubTab === 'web3_3' ? 'active-sub-tab' : ''}`}
                id="web3_3"
              >
                <p><span>Title: </span>Reimagining Knowledge: A Decentralized, Community-Driven Information Platform</p>
                <br></br>
                <p><span>Description: </span> Wikipedia, a cornerstone of online information access, faces challenges in maintaining neutrality and combating bias.  Centralized control and reliance on editor reputation can hinder diverse representation and lead to information manipulation, as highlighted in the Lex Fridman and Balaji podcast discussion.
                The limitations of centralized information platforms like Wikipedia necessitate a next-generation solution built on Web 3.0 principles. This new platform should address these issues by employing: Decentralized Governance, shifting editorial control from a single entity to a distributed network of users.  Consensus-Driven Curation would be fostered through a robust mechanism (to be determined) for collaboratively validating information accuracy and resolving disputes.  To Incentivize Diverse Participation, the platform would reward users for contributing credible information and actively engaging in the governance process. Finally, Transparency and Immutability would be maintained by leveraging blockchain technology to ensure the information record remains uncensored and verifiable.</p>
                
              </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'web3_4' ? 'active-sub-tab' : ''}`}
                id="web3_4"
              >
                <p><span>Title: </span> Democratizing Web3 Access- A Phone-Centric Wallet with Seamless User Experience</p>
                <br></br>
                <p><span>Description: </span> 
                Current crypto wallets often require complex seed phrases or private keys, creating a barrier to entry for the average user. Additionally, traditional KYC (Know Your Customer) processes can be cumbersome and deter new entrants to the Web3 space. 
                Integrating user experience (UX) elements commonly seen in successful mobile payment apps (like UPI) is also lacking in many crypto wallets, hindering mainstream adoption.
                </p>
                
              </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'web3_5' ? 'active-sub-tab' : ''}`}
                id="web3_5"
              >
                <p><span>Title: </span> Decentralized Platform for Transparent Carbon Offsetting and Global Impact.</p>
                <br></br>
                <p><span>Description: </span>
                The current carbon credit market lacks transparency, accessibility, and data cohesion. This hinders effective climate action and discourages broader participation. 
                We need a system that incentivizes sustainable practices, fosters trust through transparent tracking, and empowers individuals and organizations to contribute to a global carbon market.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
      
  );
};

export default ProblemStatement;