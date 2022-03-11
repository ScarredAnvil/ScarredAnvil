// this is a test runner Javascript frontend
    import { loadStdlib } from '@reach-sh/stdlib';
    import * as backend from './build/index.main.mjs';
        // imporst the standard library and the backend produced by ./reach compile
    (async () => {
        // this defines an asynchronous function forming the body of our frontend with the await keyword below
    const stdlib = loadStdlib();
        // loads the standard library based on REACH_CONNECTOR_MODE
    const startingBalance = stdlib.parseCurrency(100);
        // amount of networks tokens provided
    const accAlice = await stdlib.newTestAccount(startingBalance);
    const accBob = await stdlib.newTestAccount(startingBalance);
        // creates test accounts - only works on the Reach-provided dev network
    const ctcAlice = alice.deploy(backend);
    const ctcBob = bob.attach(backend, ctcAlice.getInfo());
        // this has Alice deploy the application and Bob connect to it
    const HAND = ['Rock', 'Paper', 'Scissors'];
    const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];
        // array to define hands and outcomes
    const Player = (Who) => ({
    getHand: () => {
    const hand = Math.floor(Math.random() * 3);
    console.log(`${Who} played ${HAND[hand]}`);
    return hand;
    },
    seeOutcome: (outcome) => {
      console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
  });
        // defines a constructor for the Player implementation and defines the getHand and seeOutcome methods.
  await Promise.all([
      backend.Alice(
        stdlib, ctcAlice,
        Player('Alice'),
      ),
      backend.Bob(
        stdlib, ctcBob,
        Player('Bob'),
      ),
        // represents the implementation once for Alice and once for Bob
      ]);
    console.log('hello world!');
        // writes the above phrase to the console, you can skip this
    })();

