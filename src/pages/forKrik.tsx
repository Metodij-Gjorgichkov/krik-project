import Faq from "@/components/Faq";
import React, { useState } from "react";

const ForKrik = () => {
  const forKrik = [
    {
      title: "Мисија",
      desc: "Да понуди активности за зајакнување на капацитетите на младите и лицата со попреченост преку развој на младинската работа и обезбедување услуги за социјална заштита.",
    },
    {
      title: "Визија",
      desc: "Да создаде инклузивно општество каде младите и лицата со попреченост се подеднакво вклучени и имаат целосно развиени капацитети активно да придонесуваат за заедницата.",
    },
    {
      title: "Нашите Вредности",
      desc: "Развивање на младинската работа, поттикнување младински активизам и волонтеризам. Поголема вклученост на младите исклучени од општеството преку учество на работилници, настани и обуки.Развој на услуги за социјална заштита, сместување и грижа за лица со интелектуална и или телесна попреченост и други услови. Поттикнување на социјалната вклученост на маргинализираните групи млади и возрасни во сите сфери на општественото делување.",
    },
  ];

  const faqType = [
    {
      id: 1,
      title: "01  Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. ",
    },
    {
      id: 2,
      title: "02  Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. ",
    },
    {
      id: 3,
      title: "03  Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. ",
    },
    {
      id: 4,
      title: "04  Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. ",
    },
    {
      id: 5,
      title: "05  Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. ",
    },
  ];

  return (
    <>
      <div className="darker-white">
        <div className="container pb-5" style={{ paddingTop: "130px" }}>
          <div className="row d-flex align-items-center pb-5">
            <div className="col-12 col-lg-6 mb-md-3">
              <img
                src="/images/ForKrik/forKrik.png"
                alt="za krik"
                style={{ opacity: "0.5", maxHeight: "450px", width: "100%" }}
              />
            </div>
            <div className="col-12 col-lg-6">
              <h3 className="mb-3">
                Центарот за младинскиот активизам Крик е невладина, непрофитна
                организација основана од страна на млади луѓе, предводена од
                млади луѓе и работи за и со младите луѓе.{" "}
              </h3>
              <span>
                Целната група со која КРИК работи се сите луѓе (но главно млади)
                кои сакаат да придонесат и направат промени во полето на
                екологија, критичко размислување и комуникациски вештини, како и
                рабење за благостојба на социјално исклучените групи од
                општеството и маргинализираните групи. Крик се стреми кон
                поттикнување на поголема партиципација на младите, младински
                активизам, да ги охрабри младите луѓе да бидат повеќе вклучени
                во процесот на креирање политики на локално и на национално
                ниво.
              </span>
            </div>
          </div>

          <div className="row d-flex align-items-center mt-5">
            <div className="col-12">
              <h2 className="font-weight-800">За Крик</h2>
            </div>
          </div>
        </div>

        {forKrik.map((krik) => {
          return (
            <div
              className="container-fluid py-3"
              style={{
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
              }}
            >
              <div
                className="row d-flex align-items-center"
                style={{ margin: "0 auto", width: "80%" }}
              >
                <div className="col-12 col-md-3">
                  <h4 className="color-red">{krik.title}</h4>
                </div>
                <div className="col-12 col-md-9">
                  <span>{krik.desc}</span>
                </div>
              </div>
            </div>
          );
        })}

        <div className="container mt-5 pb-5">
          <div className="row">
            <div className="col-12 mb-3">
              <h2 className="font-weight-800">Најчесто поставувани прашања</h2>
            </div>
            {faqType.map((faq) => {
              return <Faq {...faq} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForKrik;
