import React from 'react'
import './GettingStarted.scss'

// fix spacing
const GettingStarted = () => (
  <div class="GettingStartedContainer">
    <div id="GettingStartedFirstBlock">
      <h1> Neo 3.x Privatenet Tutorial </h1>
      <p>
        Running a private Neo network for testing is vital for development of
        smart contracts and dApps. TestNet GAS is scarce and the TestNet is
        often under load by other people's stress tests, so it makes sense to do
        most of your initial testing in a local setting, where you own all the
        NEO and GAS and there are no other transactions besides your own.
      </p>

      <p>
        This tutorial is specific to Neo 3.x - if you want to set up a Neo 2.x
        privatenet you have multiple options, for instance neo-local or
        neo-express, as well as multiple tutorials.{' '}
      </p>

      <p>
        Below I will describe the setup for a single-node-consensus privatenet,
        which is sufficient for most contract and dApp testing purposes.{' '}
      </p>

      <h1>Prerequisites:</h1>

      <li>
        <a
          target="_blank"
          href="https://dotnet.microsoft.com/download/dotnet-core/2.1"
        >
          {' '}
          .Net Core 2.1 Runtime or SDK{' '}
        </a>
      </li>
    </div>
    <div class="NumberedSections">
      <div>
        <div class="FancyNumber">1</div>
        <h1>Installation</h1>
        <p></p>
        <uli>
          1. Install the .NET SDK for your platform according to instructions
          from Microsoft
        </uli>
        <p></p>
        <uli>
          2. Download the latest Neo 3.0 preview release for your platform from{' '}
          <a
            target="_blank"
            href="https://github.com/neo-project/neo-cli/releases"
          >
            https://github.com/neo-project/neo-cli/releases{' '}
          </a>{' '}
        </uli>
        <p></p>
        <uli>3. Unzip the file into the folder of your choice</uli>
        <p></p>
        <uli>4. Open a terminal window and change directory to that folder</uli>
        <p></p>
        <uli>5. Run the following commands in that terminal:</uli>
        <p></p>
        <div class="CodeBlock">
          cd neo-cli <br></br>
          <br></br>
          curl -o protocol.json
          https://raw.githubusercontent.com/hal0x2328/neo3-privatenet-tutorial/master/protocol.privatenet3.json{' '}
          <br></br>
          <br></br>
          curl -o config.json
          https://raw.githubusercontent.com/hal0x2328/neo3-privatenet-tutorial/master/config.privatenet3.json{' '}
          <br></br>
          <br></br>
          curl -o wallet.json
          https://raw.githubusercontent.com/hal0x2328/neo3-privatenet-tutorial/master/wallet.privatenet3.json{' '}
          <br></br>
          <br></br>
        </div>
      </div>
      <div>
        <div class="FancyNumber">2</div>
        <h1>Run the node</h1>
        <br />
        On Windows or Linux:
        <br />
        <br />
        <div class="CodeBlock">dotnet ./neo-cli.dll /rpc</div>
        <br />
        On OSX:
        <br />
        <br />
        <div class="CodeBlock">
          DYLD_INSERT_LIBRARIES=/usr/local/lib/libtcmalloc.dylib dotnet
          ./neo-cli.dll /rpc
        </div>
        <p>
          You should see the consensus node start and display its version. Note
          that you won't see the usual `neo>` prompt prefix when in consensus
          mode, but the node will still accept typed commands.
        </p>
        <p>
          Now you can view the wallet balance running the command{' '}
          <code>list asset</code> in the prompt:
        </p>
        <div class="CodeBlock">
          PRivaTenetyWuqK7Gj7Vd747d77ssYeDhL <br></br>
          NEO: 0<br></br>
          GAS: 0<br></br>
          <br></br>
          PUuBM2c4PDcBUbr1NtJfuf1dKQtrMuySae <br></br>
          NEO: 100000000 <br></br>
          GAS: 30000000 <br />
          <br />
          ----------------------------------------------------
          <br />
          Total: NEO: 100000000 GAS: 30000000 <br />
          <br />
          NEO hash: 0x43cf98eddbe047e198a3e5d57006311442a0ca15 <br />
          GAS hash: 0xa1760976db5fcdfab2a9930e8f6ce875b2d18225 <br />
        </div>
        <br />
        Here you can see that you own 100,000,000 NEO and 30,000,000 GAS, but it
        actually belongs to the multisig address of your consensus node. In
        order to access your privatenet NEO/GAS from other wallets or APIs it's
        better to move it into a standard address. One is already created in the
        wallet file above, you just need to transfer the funds to it:
        <br />
        <br />
        <div class="CodeBlock">
          send neo PRivaTenetyWuqK7Gj7Vd747d77ssYeDhL 100000000
          <br />
          send gas PRivaTenetyWuqK7Gj7Vd747d77ssYeDhL 30000000
        </div>
        <br />
        Each time it will prompt you for the wallet password. For the wallet
        file provided above, the password is: <code>one</code> <br /> <br />
        In order to access the funds in this address from other wallets or APIs
        you connect to your privatenet, you can import the private key WIF{' '}
        <code>Kx6sh3EAsKQMY3PrqyhXTkNZdbBbs8Ya8D7VEssXkSb4DjfksTXF</code>. Note
        that third-party code connecting to your privatenet will need to be
        compatible with Neo 3.x and will need to use the privatenet address
        prefix code <code>55</code> in order to work with your wallet. If
        importing that WIF does not create the corresponding address{' '}
        <code>PRivaTenetyWuqK7Gj7Vd747d77ssYeDhL</code> the third-party code is
        not configured correctly for the privatenet. <br />
      </div>
      <br />
      <br />
      <div class="FancyNumber">3</div>
      <h1>Running a client node</h1>
      <br />
      Since the consensus node is limited to only one wallet, you may wish to
      run a second non-consensus node on-demand for interacting with your
      privatenet and testing smart contracts. To do this, you can copy the
      relevant files to another folder and run a second instance of neo-cli.
      Both nodes can run simultaneously on the same computer, as long as the
      port numbers in <code>config.json</code> don't overlap. (Additionally, on
      Windows, the Chain_* folders must have a unique name even if they are in
      different locations - this is a limitation of the LevelDB library on
      Windows.) This is all taken into account in the configuration file at the
      location in the curl command below.
      <br />
      <br />
      Here's how to create and start a second instance (you will want to open a
      new terminal window so that the consensus instance can continue running).
      In the same folder as your neo-cli.dll and all your configuration files,
      run:
      <br />
      <br />
      <div class="CodeBlock">
        mkdir client <br />
        cp *.dll protocol.json wallet.json client
        <br />
        cd client
        <br />
        curl -o config.json
        https://raw.githubusercontent.com/hal0x2328/neo3-privatenet-tutorial/master/config.privatenet3-client.json
        <br />
        dotnet ./neo-cli.dll
        <br />
      </div>
      <br />
      <br />
      (Remember to use the{' '}
      <code>DYLD_INSERT_LIBRARIES=/usr/local/lib/libtcmalloc.dylib</code>{' '}
      command prefix if running on OSX). <br />
      <br />
      The client configuration doesn't automatically open a wallet for you, so
      once neo-cli is started, you can run
      <br />
      <br />
      <div class="CodeBlock">open wallet wallet.json</div>
      <br />
      and enter the password <code>one</code> to access your privatenet NEO/GAS.
      You can verify that the client node is connected to the consensus node by
      running the command
      <br />
      <br />
      <div class="CodeBlock">show state</div>
      <br />
      This will display the local node's block height as well as the consensus
      node's block height at the top of the screen. When the numbers match, your
      client node is in sync and ready to interact with the blockchain.
      <br />
      <br />
      Now your Neo 3.x privatenet is ready for testing contracts and dApps. You
      can type <code>help</code> in the neo-cli prompt for information about all
      the available commands. Additionally you can send and receive information
      from the node using the Neo API over the JSON-RPC protocol on TCP port
      40332.
    </div>
  </div>
)
export default GettingStarted
