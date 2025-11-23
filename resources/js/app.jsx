// IMPORTS
    import '../css/app.css';
    import  React, { useEffect } from 'react'
    import { useState } from 'react'
    import ReactDOM from 'react-dom/client'
    


    // BODY ROOT
    const root = ReactDOM.createRoot(document.getElementById("root"));
    const menuroot = ReactDOM.createRoot(document.getElementById("menu"));

    // INFO FROND-END
      console.log("Página actual >> ", currentView);
      console.log("Idioma actual >> ", currentLang);

      
      //PÁGINAS

      // LOGIN

       if(currentView === 'login'){
            // TITULO
          document.title = "Casa Vieja | Login";
    // IMPORTAR COMPONENTE
        import('./components/es/login.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            root.render(<ReactRender />);
        });
         // IMPORTAR MENÚ
        import('./components/es/menu.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            menuroot.render(<ReactRender />);
        });
    }


     // REGISTER

       if(currentView === 'registro'){
            // TITULO
          document.title = "Casa Vieja | Registrar";
    // IMPORTAR COMPONENTE
        import('./components/es/registro.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            root.render(<ReactRender />);
        });
         // IMPORTAR MENÚ
        import('./components/es/menu.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            menuroot.render(<ReactRender />);
        });
    }

      // DETECTAR PAGINAS EN ESPAÑOL
      if(currentLang == 'es'){




    if(currentView === 'home'){
    // TITULO
          document.title = "Casa Vieja | Principal";
    // IMPORTAR COMPONENTE
  
        import('./pages/es/home.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            root.render(<ReactRender />);
        });
         // IMPORTAR MENÚ
        import('./components/es/menu.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            menuroot.render(<ReactRender />);
        });
    }


    
    if(currentView === 'about'){
    // TITULO
          document.title = "Casa Vieja | Sobre Nosotros";
    // IMPORTAR COMPONENTE
        import('./pages/es/about.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            root.render(<ReactRender />);
        });
         // IMPORTAR MENÚ
        import('./components/es/menu.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            menuroot.render(<ReactRender />);
        });
    }

    // SOLICITUD DE RESERVA

     if(currentView === 'reserva'){
    // TITULO
          document.title = "Casa Vieja | Reservar";
    // IMPORTAR COMPONENTE
  
        import('./pages/es/booking.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            root.render(<ReactRender />);
        });
         // IMPORTAR MENÚ
        import('./components/es/menu.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            menuroot.render(<ReactRender />);
        });
    }

    
     if(currentView === 'pagoReserva'){
    // TITULO
          document.title = "Casa Vieja | Pasarela de pago";
    // IMPORTAR COMPONENTE
  
        import('./components/es/reservapopup.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            root.render(<ReactRender />);
        });
         // IMPORTAR MENÚ
        import('./components/es/menu.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            menuroot.render(<ReactRender />);
        });
    }


}

// DETECTAR PAGINAS EN INGLES

   // DETECTAR PAGINAS EN ESPAÑOL
      if(currentLang == 'en'){




    if(currentView === 'home'){
            // TITULO
          document.title = "Casa Vieja | Home";
    // IMPORTAR COMPONENTE
        import('./pages/en/home.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            root.render(<ReactRender />);
        });
         // IMPORTAR MENÚ
        import('./components/en/menu.jsx').then((modulo) => {
            const ReactRender = modulo.default;
            menuroot.render(<ReactRender />);
        });
    }




}
