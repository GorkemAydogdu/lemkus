import React, { useRef } from "react";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import Footer from "../components/Footer/Footer";

const NewsDetail = () => {
  const smoothScrollWrapper = useRef();
  return (
    <SmoothScrollWrapper className="pageSmooth" ref={smoothScrollWrapper}>
      <div className="newsDetail">
        <div className="newsDetail__header">
          <h1 className="newsDetail__title">
            ROLO ROZAY X AIR JORDAN 2: THE 35TH ANNIVERSARY
          </h1>
          <ul className="newsDetail__infos">
            <li className="newsDetail__info">
              <span>Category</span>
              <span>RELASES</span>
            </li>
            <li className="newsDetail__info">
              <span>Date</span>
              <span>28.12.22</span>
            </li>
            <li className="newsDetail__info">
              <span>Author</span>
              <span>JACK LEMKUS ONLINE ADMIN</span>
            </li>
            <li className="newsDetail__info">
              <span>Read Time</span>
              <span>5 MIN</span>
            </li>
          </ul>
        </div>
        <div className="newsDetail__content">
          <div className="newsDetail__imageFull">
            <img
              src="https://cdn.accentuate.io/588768739580/1672214284385/Lemkus_Rolo_Rozay_Air_Jordan_2_Retro_1316x669.jpg?v=1672214284385"
              alt="Rolo Rozay"
            />
          </div>
          <p className="newsDetail__heading">
            IT TAKES A CERTAIN TITAN OF INDUSTRY, AND AN OG OF THE SCENE, TO
            RETROSPECT ON THE AIR JORDANS 2 IN ITS 35TH YEAR. ROLO ROZAY IS ONE
            OF THE FIRST PEOPLE TO EDIFY HIS CAREER OUT OF SNEAKERS; FROM HIS
            WORK AT SNEAKER CARTEL, TO HIS POSITION NOW AS A CULT-OF-PERSONALITY
            - IF ANYONE IS UP TO THE TASK OF HONOURING THE BONAFIDE ‘MIDDLE
            CHILD’ OF AIR JORDAN, ITS ROLO.
          </p>
          <p className="newsDetail__description">
            A stamp of approval from Rolo is a serious verification; if you
            know, you know. If you haven’t been following Rolo - which you
            should be - you might not know that the single biggest accolade he
            claims, despite all his successes, is that he’s from Bishop Lavis;
            the suburb that created him, and the place to whom he owes
            everything. It's this code of honour and integrity that defines Rolo
            as an OG and Godfather of the scene; and a lesson that we must
            always respect the beginning chapters, for where they lead us now.
            It’s with this in mind that we asked Rolo to join us in celebrating
            the AJ2; a shoe that set the stage for the lineage of Air Jordans,
            being the second edition after the wild success of the Air Jordan 1
            in 1985.
          </p>
          <p className="newsDetail__description">
            As Rolo tells us, in Cape Town - it’s all about AJ 14 - 18s - but
            that could never have happened without the 2s. As stated by Nike,
            this immaculate retro edition takes it way back to 1987 - and is an
            essential for any sneakerheads’ archive; “Made to the same specs as
            the original, you get all the iconic details like faux lizard skin,
            no Swoosh, and the original Nike Air and Wings logos. Fresh enough
            to wear to a wedding, fly enough to wear courtside—the only real
            question is what you're gonna pair them with.” This is a shoe not to
            be glossed over; it's an important feature on the mantle of
            well-refined and researched sneaker obsession.
          </p>
          <div className="newsDetail__sidetoside">
            <img
              src="https://cdn.accentuate.io/588768739580/1672214298300/Lemkus_Rolo_Rozay_Air_Jordan_2_Retro_630x668.jpg?v=1672214298300"
              alt="Air Jordan 2 Retro"
            />
            <img
              src="https://cdn.accentuate.io/588768739580/1672214309637/1_Lemkus_Rolo_Rozay_Air_Jordan_2_Retro_630x668.jpg?v=1672214309637"
              alt="Air Jordan 2 Retro"
            />
          </div>
          <p className="newsDetail__heading">
            YOU’RE A SNEAKER OG - CAN YOU BRIEFLY INTRODUCE YOUR LOVE FOR
            SNEAKERS AND HOW IT’S CATALYSED YOUR CAREER?
          </p>
          <p className="newsDetail__description">
            I’ve been into sneakers for a minute now - since I can remember -
            and I’ve built a career around it, with like-minded individuals.
            I’ve made connections between Joburg, Cape Town, Dubai, London and
            the USA; with people who have the same love for shoes that I do, the
            same passion for what footwear represents. Shoes are this unifying
            symbol in music videos, movies - across culture and subcultures - we
            all wear them, and particularly in the realm of sneakers, I don’t
            think there’s a genre that more takes advantage of how a shoe can
            represent culture, style and ideas. I’m from Bishop Lavis, and I’m
            known for being from this place; not for my name. I think this sets
            me apart.
          </p>
          <p className="newsDetail__heading">
            LET’S TALK ABOUT AIR JORDAN’S II - SINCE 1987, IT’S UNDERGONE MANY
            UPDATES. WITH THIS LATEST RELEASE, CAN YOU TALK ABOUT THE DETAILS
            YOU LOVE?
          </p>
          <p className="newsDetail__description">
            This is one of the most under-appreciated sneakers of all time. A
            lot of people skip through from 1 to 3 and go straight to 4 - all
            the way to 14, 15 - here in Cape Town, we love 15, 16, 17 and 18s,
            18.5s. When you look at it, the first ones introduced a premium,
            Italian leather. This is just one of those shoes that is obscure and
            it's paying homage to an original style. We can’t have the lineage
            that comes after, without appreciating the AJ2’s; it was one of the
            first moments we saw luxury, technical principles applied to a
            sneaker format. Nowadays, it’s hard to remember a time when that
            wasn’t a standard - we have come a long way in how we understand
            sneakers, and how they are made. When you look at the first Jordan
            2s that made it onto the internet, during that blog era, it was
            Vashtie’s lavender Air Jordan 2. I love that this is a best-kept
            secret, almost, and it's a shoe not many people have or know about.
          </p>
          <div className="newsDetail__imageText">
            <div className="newsDetail__imageText--image">
              <img
                src="https://cdn.accentuate.io/588768739580/1672214322160/02_Lemkus_Rolo_Rozay_Air_Jordan_2_Retro_630x400.jpg?v=1672214322160"
                alt="Air Jordan 2 Retro"
              />
            </div>
            <div className="newsDetail__imageText--text">
              <p className="newsDetail__heading">
                WHAT DOES AIR JORDAN AND MICHAEL JORDAN MEAN TO YOU AS A LEGACY?
              </p>
              <p className="newsDetail__description">
                We never really got to see Michael Jordan play, and it wasn’t
                accessible to us here. So our love for Jordan really came
                through from sitcoms - Will Smith, LL Cool J - and we created
                our own culture in Cape Town around Jordans, and now it's a part
                of who we are. The 2’s are the middle child, and seeing Virgil
                shine some light on it - people have taken notes. I enjoy seeing
                the Retro comeback, in a form like this; get yourself a pair at
                Lemkus and don’t sleep on it.
              </p>
            </div>
          </div>
          <div className="newsDetail__imageText newsDetail__imageText--reverse">
            <div className="newsDetail__imageText--image">
              <img
                src="https://cdn.accentuate.io/588768739580/1672214356765/01_Lemkus_Rolo_Rozay_Air_Jordan_2_Retro_630x400.jpg?v=1672214365785"
                alt="Air Jordan 2 Retro"
              />
            </div>
            <div className="newsDetail__imageText--text">
              <p className="newsDetail__heading">
                WHAT IS YOUR VISION AND HOPE FOR CAPE TOWN AND SOUTH AFRICA
                CULTURALLY IN THE NEXT YEAR AHEAD?
              </p>
              <p className="newsDetail__description">
                We are growing quickly, and we are the place to be - I see a lot
                of great things happening. The connections, the brands, and
                people putting in the work and young guys taking the torch and
                carrying the flag forward. We see it with the guys from Broke,
                Pot Plant Club - Grade Africa. People are making moves, you know
                - and with Lemkus and the Exchange Building. It’s going to take
                time for us, but there is a determined spirit that just keeps
                moving.
              </p>
              <p className="newsDetail__secondary">
                Air Jordan 2 Retro OG - Drops in-store, Friday, 30th December
                2022. Limited to one pair per customer. First come, first
                served.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default NewsDetail;
