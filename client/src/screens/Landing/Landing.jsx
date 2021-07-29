import { Link } from "react-router-dom";
import crib from "./cribbage.jpg";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">

      <h1>Cribbage</h1>
      <div className='play'>
      <Link to="/play">
        PLAY
      </Link>
      </div>

      <div className="introContainer">
        <div className="text">
          <h2>Introduction</h2>
          <p>
            Cribbage is a game of numbers. You collect points by combining cards
            together to make runs, or scoring combinations. The mathematics is
            simple, but cribbage is a game of strategy and tactics. Sometimes
            you try to score points, sometimes you try to stop your opponent
            from scoring; every game is subtly different.
          </p>
        </div>
        <div className="photo">
          <img className="crib" src={crib} alt="cribbage" />
        </div>
      </div>

      <div className="instrContainer">
        <div className="instructions">
          <h2>How to Play</h2>
          <ul>
            <li>
              The deck is placed face down on the table; each player pulls out
              one card. The person with the lowest card is the dealer. The
              dealer deals 6 cards to each player.
            </li>
            <li>
              Each player looks at their 6 cards and decides which 4 to keep in
              his hand and which 2 to discard face-down into a pile near the
              dealer called "the crib." This is a hand that is looked at at the
              end of the game and is reserved for the dealer and the dealer
              only.
            </li>
            <li>
              The player who did not deal cuts the deck to determine the top
              card. Then, the dealer should flip it over. Both players will use
              this card, called the "cut," as a wild fifth card to count points
              at the end of the round.
            </li>
            <li>
              Players alternate laying cards down in their own piles, starting
              with the non-dealer. As they play each card, they call out the
              value of the total. Face cards have a value of 10; all others are
              worth their numeric value. Aces are always only worth 1 point.
              Suits do not matter in this round; only numeric values. Play stops
              at 31 (or when no one can lay down a card). For example, If the
              first player lays a 3 and the second player lays a 4, the first
              player calls out, "3" and the second player calls out "7." Though
              they're in separate piles, it's the cumulative total of all the
              cards.
            </li>
            <li>
              Make pairs, runs, and other combinations to score points. While
              you're laying cards and thinking about not going over 31, use what
              your opponent(s) is laying to your advantage. You get extra points
              for pairs, runs, and certain numbers. As you score, move your peg
              around the board.
            </li>
            <ul>
              <li>
                If either player reaches 15 points exactly, this earns him 2
                points.
              </li>
              <li>
                Points are also earned and pegged for pairs (and triplets,
                etc.). For example, player 1 lays down a 7 and Player 2
                immediately follows with another 7, which would earn him 2
                points. If Player 1 then lays down a third 7, he earns 6 points.
                The fourth seven would be worth 12 points. (Note: if Player 2 is
                not able to lay down any other card without exceeding 31, and
                Player 1 has the fourth seven, he can lay it down and earn the
                12 points.)
              </li>
              <li>
                Sequences also score points. They must be consecutive cards, but
                not necessarily in order. For example: The first player plays a
                4, second player plays a 6. If the first player now plays a 5 he
                would score three points for completing a run of 3. If the
                second player now plays a 3 or a 7 he would then score 4 points
                for making a run of 4.
              </li>
              <li>
                After "31" (or as close as possible in the hand), the person
                laying down the last card takes a point for having the final
                card. If the last card makes exactly 31, the player gets 1
                additional point.
              </li>
            </ul>
            <li>
              Continue until a player cannot lay down another card without
              exceeding 31. At this point, he says "Go." If the other player can
              still lay down another card without exceeding 31, he must do so
              for as many times as necessary. Once he lays down as many cards as
              he can without going over 31, he says "Go" and earns 1 point.
              However, if the total he ends up with is exactly 31, he earns 2
              points.
            </li>
            <li>Count up the cards to get your final score.</li>
            <ul>
              <li>
                You score one point if you hold the Jack of the suit that was
                cut.
              </li>
              <li>
                Pairs, triples and quadruples count -- 2, 6 and 12 points,
                respectively.
              </li>
              <li>
                Sequences (e.g. 6-7-8) do not have to be the same suit, and
                count as 1 point per card. They must consist of at least three
                cards.
              </li>
              <li>
                Any combination of cards that add up to 15 counts as 2 points
                (even if it took all five cards to do it). You may use a card
                more than once in different combinations.
              </li>
              <li>
                A flush (all four cards are the same suit) is worth 4 points.
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
