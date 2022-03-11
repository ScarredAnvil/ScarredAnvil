'reach 0.1';
const Player = {
   getHand:Fun([],UInt),
   seeOutcome:Fun([UInt],Null)
 };
    // gethand returns a number and getoutcome recieves a number
export const main = Reach.App(
  {}, [['Alice', Player], ['Bob', Player]], (A, B) => {
        A.only(() => {
        // this means that only A performs this action: handA is only known to Alice. Need to update this to a more modern syntax.
            const handA = declassify(interact.getHand());
        // binds the gethand result from the frontend and declassifies it
        });
        A.publish(handA);
        // publishes the value to evaluate the outcome
        commit();

        B.only(() => {
            const handB = declassify(interact.getHand());
        });
        B.publish(handB);
        const outcome = (handA + (4 - handB)) % 3;
        // calculates the winner
        commit();

        each([A, B], () => {
            interact.seeOutcome(outcome);
        // this defines the code as a local step each participant takes
        });
    });
