# Dashboard Angular Application

The following application is an Angular application with the DevExpress Web Dashboard Angular Component inside. 

The Web Dashboard can be rendered on the client-side, while having data fed to it by an ASP.NET Core / ASP.NET MVC back-end. This means you can:

- Publish Web Dashboard as a part of applications based on Angular.
- Integrate a dashboard into any place that supports HTTP requests (e.g., see the [GitHub Pages Demo](https://devexpress.github.io/web-dashboard-demo/)).
- Use the Dashboard side-by-side with [DevExtreme](https://js.devexpress.com) client-side widgets to create highly responsive web apps.

The Dashboard Angular application is hosted on the [GitHub Pages](https://pages.github.com), while the server side - on [DevExpress.com](https://www.devexpress.com).

**See in action:** https://devexpress.github.io/web-dashboard-demo/

![html-dashboard-demo](https://user-images.githubusercontent.com/17986517/35871357-13796742-0b75-11e8-9b12-a90de4813b96.png)

> Web Dashboard has components both for [Angular](https://docs.devexpress.com/Dashboard/400409) and [React](https://docs.devexpress.com/Dashboard/400683), but you can also create a pure [HTML JavaScript Web Dashboard](https://github.com/devexpress/web-dashboard-demo) application.


## Demo Structure
The application uses the following DevExpress npm packages:
- `devexpress-dashboard`
- `devexpress-dashboard-angular`
- `@devexpress/analytics-core`
- `devextreme devextreme-angular`

When you create your own application with the Dashboard Angular component, make sure the following requirements are met:

- The script version on the client should match with libraries version on the server up to a minor version.
- Versions of the DevExpress npm packages should be identical (their major and minor versions should be the same).

The client part is an Angular application, where the `DxDashboardControlModule` module is used. Take a look at the following files:

- [app.module.ts](./src/app/app.module.ts)

  Imports the `DxDashboardControlModule` module.
- [app.component.html](./src/app/app.component.html)

  Embeds the `dx-dashboard-control` component.
- [app.component.ts](./src/app/app.component.ts)

  Contains the application logic.
  
 The server-side of this project is an ASP.NET Core application hosted on the DevExpress.com.
  
 ## Documentation

- [Get Started: How to Create a Dashboard Angular Application](https://docs.devexpress.com/Dashboard/400322?v=20.2)
- [Client-Side Configuration (Angular)](https://docs.devexpress.com/Dashboard/400409?v=20.2)
- [Server-Side Configuration (ASP.NET Core)](https://docs.devexpress.com/Dashboard/119166?v=20.2)
- [Server-Side Configuration (ASP.NET MVC)](https://docs.devexpress.com/Dashboard/119500?v=20.2)

## License

These files are distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).
