import ImageIcons from "./ImageIcons";
import ModalButton from "./ModalButton";
import ModalIcons from "./ModalIcons";
import ModalText from "./ModalText";

import { FaEllipsisH, FaCircle } from "react-icons/fa";
const ModalBox = ({ slides }) => {
  const userFigures = (userId) => {
    const existingSlides = slides.filter((slide) => slide.id === userId);
    return existingSlides;
  };

  console.log(userFigures(1), "grace");

  return (
    <>
      <div className="modal-container">
        <div className="modal-slider">1</div>

        <div className="modal-sidebar">
          {userFigures(3).map((slide) => (
            <div className="modal-nav">
              <div className="mode">
                <img src={slide.image} alt="" className="modal-icon" />

                <div className="mode-status">
                  <div className="mode-name">
                    <ModalText title="Brooke" className="mode-text" />

                    <ModalIcons icon={FaCircle} className="dot" />
                    <ModalButton title="Follow" className="follow-btn" />
                  </div>

                  <div>
                    <ModalText title="Los Angeles" className="country" />
                  </div>
                </div>
              </div>

              <></>

              <div>
                <ModalIcons icon={FaEllipsisH} className="FaEllipsis" />
              </div>
            </div>
          ))}

          <div className="modal-commentBox">
            {userFigures(3).map((slide) => (
              <div className="modal-report">
                <img src={slide.image} alt="" className="modal-icon" />
                <p className="report-text">
                  <span className="content">Brooke</span>
                  On his arrival, Jesus found that Lazarus had already been in
                  the tomb for four days. 18 Now Bethany was less than two
                  miles[b] from Jerusalem, 19 and many Jews had come to Martha
                  and Mary to comfort them in the loss of their brother. 20 When
                  Martha heard that Jesus was coming, she went out to meet him,
                  but Mary stayed at home. 21 ???Lord,??? Martha said to Jesus, ???if
                  you had been here, my brother would not have died. 22 But I
                  know that even now God will give you whatever you ask.??? 23
                  Jesus said to her, ???Your brother will rise again.??? 24 Martha
                  answered, ???I know he will rise again in the resurrection at
                  the last day.??? 25 Jesus said to her, ???I am the resurrection
                  and the life. The one who believes in me will live, even
                  though they die; 26 and whoever lives by believing in me will
                  never die. Do you believe this???? 27 ???Yes, Lord,??? she replied,
                  ???I believe that you are the Messiah, the Son of God, who is to
                  come into the world.??? 28 After she had said this, she went
                  back and called her sister Mary aside. ???The Teacher is here,???
                  she said, ???and is asking for you.??? 29 When Mary heard this,
                  she got up quickly and went to him. 30 Now Jesus had not yet
                  entered the village, but was still at the place where Martha
                  had met him. 31 When the Jews who had been with Mary in the
                  house, comforting her, noticed how quickly she got up and went
                  out, they followed her, supposing she was going to the tomb to
                  mourn there. 32 When Mary reached the place where Jesus was
                  and saw him, she fell at his feet and said, ???Lord, if you had
                  been here, my brother would not have died.??? 33 When Jesus saw
                  her weeping, and the Jews who had come along with her also
                  weeping, he was deeply moved in spirit and troubled. 34 ???Where
                  have you laid him???? he asked. ???Come and see, Lord,??? they
                  replied. 35 Jesus wept. 36 Then the Jews said, ???See how he
                  loved him!??? 37 But some of them said, ???Could not he who opened
                  the eyes of the blind man have kept this man from dying????
                  Jesus Raises Lazarus From the Dead 38 Jesus, once more deeply
                  moved, came to the tomb. It was a cave with a stone laid
                  across the entrance. 39 ???Take away the stone,??? he said. ???But,
                  Lord,??? said Martha, the sister of the dead man, ???by this time
                  there is a bad odor, for he has been there four days.??? 40 Then
                  Jesus said, ???Did I not tell you that if you believe, you will
                  see the glory of God???? 41 So they took away the stone. Then
                  Jesus looked up and said, ???Father, I thank you that you have
                  heard me. 42 I knew that you always hear me, but I said this
                  for the benefit of the people standing here, that they may
                  believe that you sent me.??? 43 When he had said this, Jesus
                  called in a loud voice, ???Lazarus, come out!??? 44 The dead man
                  came out, his hands and feet wrapped with strips of linen, and
                  a cloth around his face. Jesus said to them, ???Take off the
                  grave clothes and let him go.??? The Plot to Kill Jesus 45
                  Therefore many of the Jews who had come to visit Mary, and had
                  seen what Jesus did, believed in him. 46 But some of them went
                  to the Pharisees and told them what Jesus had done. 47 Then
                  the chief priests and the Pharisees called a meeting of the
                  Sanhedrin. ???What are we accomplishing???? they asked. ???Here is
                  this man performing many signs. 48 If we let him go on like
                  this, everyone will believe in him, and then the Romans will
                  come and take away both our temple and our nation.??? 49 Then
                  one of them, named Caiaphas, who was high priest that year,
                  spoke up, ???You know nothing at all! 50 You do not realize that
                  it is better for you that one man die for the people than that
                  the whole nation perish.??? 51 He did not say this on his own,
                  but as high priest that year he prophesied that Jesus would
                  die for the Jewish nation, 52 and not only for that nation but
                  also for the scattered children of God, to bring them together
                  and make them one. 53 So from that day on they plotted to take
                  his life. 54 Therefore Jesus no longer moved about publicly
                  among the people of Judea. Instead he withdrew to a region
                  near the wilderness, to a village called Ephraim, where he
                  stayed with his disciples. 55 When it was almost time for the
                  Jewish Passover, many went up from the country to Jerusalem
                  for their ceremonial cleansing before the Passover. 56 They
                  kept looking for Jesus, and as they stood in the temple courts
                  they asked one another, ???What do you think? Isn???t he coming to
                  the festival at all???? 57 But the chief priests and the
                  Pharisees had given orders that anyone who found out where
                  Jesus was should report it so that they might arrest him.
                  Footnotes John 11:16 Thomas (Aramaic) and Didymus (Greek) both
                  mean twin. John 11:18 Or about 3 kilometers{" "}
                </p>
              </div>
            ))}
          </div>

          <div className="news-icons">
            <div className="icon-btn">
              <ImageIcons
                className="mode-btn"
                src="https://cdn-icons.flaticon.com/png/512/5948/premium/5948503.png?token=exp=1643408462~hmac=f07d08d57a93e428126f078de8c27dda"
                width="24"
                height="24"
              />
              <ImageIcons
                className="comment-btn"
                src="https://cdn-icons.flaticon.com/png/512/3114/premium/3114810.png?token=exp=1643408657~hmac=65e9fbe7c4068c1748e9e58632c89612"
                width="24"
                height="24"
              />
              <ImageIcons
                className="mode-btn"
                src="https://cdn-icons.flaticon.com/png/512/3024/premium/3024593.png?token=exp=1643407058~hmac=ece9cda9d38775c95cac1f8988e06dd9"
                width="24"
                height="24"
              />
            </div>

            <ImageIcons
              className="mode-btn"
              src="https://cdn-icons.flaticon.com/png/128/2099/premium/2099170.png?token=exp=1643585631~hmac=eb66dbcef5efb5537ea17fe244fb1060"
              width="24"
              height="24"
            />
          </div>

          <div className="comment-container">
            <div className="userimage-likes">
              <div className="image">
                {userFigures(13).map((slide) => (
                  <img src={slide.image} alt="" className="usercomment-icon" />
                ))}
              </div>
              <div>
                {userFigures(1).map((slide) => (
                  <img src={slide.image} alt="" className="usercomment-icon" />
                ))}
              </div>
            </div>
            <div className="comment-status">
              <p className="liked">
                Liked by <span className="figure">Zavala</span> and
              </p>
              <p className="others">
                <span className="figue">540 others</span>
              </p>
            </div>

            {/* {<img src={slides[0].image} alt="" className="modal-icon" />} */}
          </div>
          <div className="date-container">
            <ModalText title="JANUARY 28, 2022" className="date" />
          </div>

          <div className="addComment-container">
            <ImageIcons
              src="https://img.icons8.com/ios-glyphs/2x/happy.png"
              className="emoji-btn"
            />

            <div className="textarea-container">
              <textarea
                className="addComment"
                name="add comment"
                placeholder="Add a comment..."></textarea>
            </div>
            <ModalButton className="post-btn" title="Posts" />
          </div>
          <></>
        </div>
      </div>
    </>
  );
};

export default ModalBox;
