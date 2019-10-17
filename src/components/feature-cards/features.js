import React from 'react'

import dbft2 from '../../images/features/dbft2.svg'
import id from '../../images/features/id.svg'
import smartContract from '../../images/features/smart-contract.svg'
import vm from '../../images/features/vm.svg'
import dualToken from '../../images/features/dual-token.svg'
import fs from '../../images/features/fs.svg'
import oracle from '../../images/features/oracle.svg'
import voting from '../../images/features/voting.svg'

export const features = [
  {
    title: 'dBFT2.0',
    description:
      'A consensus algorithm with high stability, high TPS, and single block transaction finality.',
    image: dbft2,
    renderDetailedDescription: () => (
      <div className="feature-detailed-description-container">
        <p>
          Delegated Byzantine Fault Tolerance (dBFT) is the consensus mechanism
          used by NEO, used by consensus nodes to propose, validate, and
          finalize new blocks. Based on the revolutionary PBFT, dBFT provides
          true finality within a single block by requiring 2/3 approval from
          elected consensus nodes before a block may be finalized and added to
          the chain.
        </p>
        <p>
          This requirement for full network consensus on each new block removes
          the possibility of blockchain forks, providing immutability by
          ensuring that transactions are irreversible as soon as they are
          confirmed on the blockchain. In addition to the benefit of true
          finality for financial applications, dBFT provides the NEO blockchain
          with a reliable, highly performant Layer-1.
        </p>
        <p>
          Due to the absence of a third ‘commit’ phase of consensus in the
          original version of dBFT, under rare circumstances, it was possible
          for a single block fork to occur. This could occur if an active
          speaker node gathered the required signatures to validate a proposed
          block, but failed to broadcast it. Other nodes would begin a new
          consensus view, however, the original speaker could potentially share
          the now-rejected block to peer nodes, stalling them.
        </p>
        <p>
          Since the update to dBFT 2.0, which included the commit stage in
          addition to a recovery strategy, NEO2 has enjoyed{' '}
          <a
            href="https://medium.com/neo-smart-economy/dbft-2-0-3-months-no-sporks-e2ab9fe1065b"
            target="_blank"
            rel="noopener noreferrer"
          >
            stable operations
          </a>
          . NEO3 will inherit the dBFT 2.0 consensus protocol, altered with a
          lowered block time in addition to a more accessible voting mechanism
          for consensus node elections.
        </p>
        <br />
        <br />
        <div className="feature-links-container">
          {/* <span>Links:</span> */}
          <a
            href="https://docs.neo.org/developerguide/en/articles/consensus/consensus_algorithm.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            dBFT Algorithm
          </a>

          <a
            href="https://github.com/NeoResearch/yellowpaper/blob/master/releases/08_dBFT.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yellowpaper
          </a>

          <a
            href="https://github.com/neo-ngd/NEO-Tutorial/blob/master/en/7-consensus/4-Examples_and_consensus_scenarios_for_dBFT.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consensus examples
          </a>
        </div>
      </div>
    ),
  },
  {
    title: 'NeoVM',
    description:
      'A lightweight, cross-platform, and scalable virtual machine for trustless execution of smart contracts.',
    image: vm,
    renderDetailedDescription: () => (
      <div className="feature-detailed-description-container">
        <p>
          NeoVM is a lightweight virtual machine developed for the NEO
          blockchain. Contracts on NEO are compiled to NVM bytecode, which is
          then interpreted and executed by NeoVM.
        </p>
        <p>
          In NEO3, NeoVM has been decoupled from the blockchain, allowing it to
          become a standalone virtual machine. This offers several benefits,
          enabling new potential application scenarios for NeoVM outside of the
          blockchain, simplifying the VM’s integration into IDEs for debugging,
          and allowing for the introduction of native contracts.
        </p>
        <p>
          Several opcodes have been discarded in NeoVM for NEO3 as part of the
          simplification process. The free 10 GAS system fee discount has been
          removed, however, the{' '}
          <a
            href="https://github.com/neo-ngd/NEO3-Development-Guide/tree/master/en/SmartContract#fees"
            target="_blank"
            rel="noopener noreferrer"
          >
            fee for each opcode
          </a>{' '}
          has been substantially reduced.
        </p>
        <br />
        <br />
        <div className="feature-links-container">
          {/* <span>Links:</span> */}
          <a
            href="https://github.com/neo-ngd/NEO3-Development-Guide/tree/master/en/NeoVM#neo-virtual-machine"
            target="_blank"
            rel="noopener noreferrer"
          >
            NeoVM Architecture
          </a>

          <a
            href="https://github.com/neo-ngd/NEO3-Development-Guide/blob/master/README.md#changes-in-neo3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Changes in NEO3
          </a>

          <a
            href="https://neoresearch.io/nvm-learn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NVM Learn
          </a>
        </div>
      </div>
    ),
  },
  {
    title: 'SmartContract',
    description:
      'A smart contract system designed to be developer-friendly with support for multiple popular languages, cross-platform compatibility, and parallel execution.',
    image: smartContract,
    renderDetailedDescription: () => (
      <div className="feature-detailed-description-container">
        <p>
          Smart contracts on NEO are compiled to bytecode for execution by the
          VM, allowing them to be built in a variety of popular languages such
          as Python, C#, JavaScript/TypeScript, Java, Golang and others. Various
          communities within the NEO ecosystem have contributed powerful
          developer tools designed to simplify the building experience on NEO.
        </p>
        <p>
          In NEO3, every transaction is the invocation of a smart contract.
          Contracts deployed on NEO3 must also provide a{' '}
          <a
            href="https://github.com/neo-ngd/NEO3-Development-Guide/tree/master/en/SmartContract#manifest"
            target="_blank"
            rel="noopener noreferrer"
          >
            manifest file
          </a>
          , which describes properties such as its features, permissions, safe
          methods, and any groups that the contract belongs to.
        </p>
        <p>
          Native contracts have also been introduced in NEO3, which are executed
          in their native code rather than as bytecode in NeoVM. These contracts
          can expose their service names to other contracts for easy invocation.
          So far three native contracts have been developed; one for the NEO
          token, one for GAS, and a policy contract for saving key parameters
          such as the max number of transactions per block or required network
          fee per byte.
        </p>
        <br />
        <br />
        <div className="feature-links-container">
          <a
            href="https://docs.neo.org/docs/en-us/sc/gettingstarted/introduction.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contract introduction
          </a>

          <a
            href="https://github.com/neo-ngd/NEO3-Development-Guide/tree/master/en/SmartContract"
            target="_blank"
            rel="noopener noreferrer"
          >
            NEO3 Smart Contracts
          </a>

          <a
            href="https://github.com/CityOfZion/awesome-neo"
            target="_blank"
            rel="noopener noreferrer"
          >
            awesome-neo developer resources
          </a>
        </div>
      </div>
    ),
  },
  {
    title: 'NeoID',
    description:
      'Returns control over data and identities back to the user, delivering a higher degree of trust and security to the smart economy.',
    image: id,
    renderDetailedDescription: () => (
      <div className="feature-detailed-description-container">
        <p>
          NeoID is a decentralized digital identity protocol built on NEO,
          leveraging decentralized identifiers to provide users with the means
          of proving their identity or credentials without trusting third-party
          entities with their data.
        </p>
        <p>
          The solution outlines three main components; a Trust Model that
          describes the rules of trust in the network, a Privacy Model that
          outlines the privacy protection scheme for user data, and a Game Model
          which documents benefits and penalties for actions that occur within
          the trust network.
        </p>
        <br />
        <br />
      </div>
    ),
  },
  {
    title: 'NeoFS',
    description:
      'A scalable, decentralized object storage network integrated with NEO contracts to provide trustless data storage facilities.',
    image: fs,
    renderDetailedDescription: () => (
      <div className="feature-detailed-description-container">
        <p>
          NeoFS is a distributed, decentralized object storage platform that is
          integrated with NEO. Primarily it is intended for use as data storage
          for dApps or as a content delivery network. It can also be used for
          private data storage for individuals and enterprises alike.
        </p>
        <p>
          The system uses network map subsets and storage policy rules to place
          objects in a deterministic manner, allowing it to remain scalable
          without compromising decentralization. Data is audited using novel
          zero-knowledge data validation methods based on homomorphic hashing to
          minimize the need for data transfers.
        </p>
        <p>
          Users can join the network as an outer ring storage node by renting
          unused disk space to the network in return for GAS, a native token of
          NEO and payment method of NeoFS. Alternatively, users can register to
          run an inner ring node, responsible for data auditing and handling
          payments.
        </p>
        <br />
        <br />
        <div className="feature-links-container">
          <a
            href="https://www.youtube.com/watch?v=2o44JvXyy0o"
            target="_blank"
            rel="noopener noreferrer"
          >
            NeoFS Webinar
          </a>

          <a
            href="https://medium.com/@neospcc/public-neofs-testnet-launch-18f6315c5ced"
            target="_blank"
            rel="noopener noreferrer"
          >
            NeoFS TestNet
          </a>

          <a
            href="https://github.com/nspcc-dev/research-plan/blob/master/research_plan.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Research Plan
          </a>
        </div>
      </div>
    ),
  },
  {
    title: 'Oracles',
    description:
      'Allows smart contracts to access internet resources via URL during execution, using consensus nodes to ensure data consistency.',
    image: oracle,
    renderDetailedDescription: () => (
      <div className="feature-detailed-description-container">
        <p>
          Oracles provide blockchain platforms with an extended range of use
          cases by allowing contracts to interact with data retrieved from the
          Internet. Potential use cases include providing access to true random
          number generators or acquiring token price data, both of which can
          extend the usability of smart contracts.
        </p>
        <p>
          NEO3 will include its own built-in oracle solution, which will allow
          contracts to make data requests targeted through a URL. A separate
          oracle node network will be responsible for processing requests, which
          after confirmation can be relayed for validation by consensus nodes.
        </p>

        <br />
        <br />
        <div className="feature-links-container">
          <a
            href="https://github.com/neo-project/neo/issues/967"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design options and use cases for oracles
          </a>
        </div>
      </div>
    ),
  },
  {
    title: 'Dual Token',
    description:
      'As the first blockchain to adopt a dual token economic model, NEO separates governance rights from network usability by defining a governance token (NEO) and a utility token (GAS).',
    image: dualToken,
    renderDetailedDescription: () => (
      <div className="feature-detailed-description-container">
        <p>
          As the first blockchain to adopt a dual token economic model, NEO
          separates governance rights from network usability by defining a
          governance token (NEO) and a utility token (GAS).
        </p>
        <br />
        <br />
        <div className="feature-links-container">
          <a
            href="https://docs.neo.org/docs/en-us/basic/whitepaper.html#e1c34852"
            target="_blank"
            rel="noopener noreferrer"
          >
            NEO Economic Model
          </a>
        </div>
      </div>
    ),
  },
  {
    title: 'Voting Mechanism',
    description:
      'Decentralizing control over the network by allowing NEO holders to vote for consensus nodes.',
    image: voting,
    renderDetailedDescription: () => (
      <div className="feature-detailed-description-container">
        <p>
          Consensus nodes on NEO are elected by the votes of NEO token holders.
          Due to NEO Foundation’s ownership of a large percentage of NEO tokens,
          the election process is split into two components: on-chain and
          off-chain governance. These components represent the two avenues that
          a candidate may follow to become an active consensus node:
        </p>
        <p>
          On-chain governance refers to the vote of community NEO holders. After
          registering as a consensus node, candidates may appeal to the
          community to secure enough votes to participate in block validation.
        </p>
        <p>
          Off-chain governance refers to the vote of the NEO Foundation, secured
          through a strategic partnership. NEO Foundation will use its vote to
          decentralize control over its own consensus nodes.
        </p>
        <p>
          The decentralization process is currently on hold until the release of
          NEO3. After all seven existing consensus nodes are operated by
          independent parties, new nodes will be added to the network in batches
          of three to further increase the decentralization of the blockchain.
        </p>
        <br />
        <br />
        <div className="feature-links-container">
          <a
            href="https://docs.neo.org/developerguide/en/articles/consensus/vote_validator.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voting and Election
          </a>
          <a
            href="https://neo-ngd.github.io/reference/How-To-Become-NEO-Consensus-Node.html#1-overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to Become a NEO Consensus Node
          </a>
        </div>
      </div>
    ),
  },
]
