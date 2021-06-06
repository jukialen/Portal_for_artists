import React from 'react';

import './Faq.scss';

export function Faq() {
  return (
    <section to='/faq' className="workspace">
      <h2>Częste pytania</h2>

      <div className="questions__faq">
        Czy korzystanie z serwisu jest darmowe?
      </div>
      <p className="answers__faq">
        Tak. Z serwisu można korzystać za darmo. Jednak aby skorzystać z
        dodatkowych korzyści, należy wykupić plan Premium.
      </p>

      <div className="questions__faq">Jakie korzyści daje plan Premium?</div>
      <p className="answers__faq">
        Plan Premium m. in. zapewnia priorytetowe wsparcie naszegu wsparcia
        klienta oraz brak reklam. Jeśli chcesz się więcej dowiedzieć, możesz
        dowiedzieć się <a href="#">tutaj</a>.
      </p>

      <div className="questions__faq">
        Czy wykupienie usługi Premium jest potrzebne do korzystania z planu
        Premium?
      </div>
      <p className="answers__faq">
        Nie jest potrzebne. Możesz korzystać z serwisu bez planu Premium.
      </p>
    </section>
  );
}
