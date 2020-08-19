# Dashboard Angular Application

The following application is an Angular application with the DevExpress Web Dashboard Angular Component inside. The Angular client side is hosted on the [GitHub Pages](https://pages.github.com), while the server side - on [DevExpress.com](https://www.devexpress.com).

**See in action:**

https://devexpress.github.io/web-dashboard-demo/

![html-dashboard-demo](https://user-images.githubusercontent.com/17986517/35871357-13796742-0b75-11e8-9b12-a90de4813b96.png)

## Benefits of This Approach

The Web Dashboard can now be easily rendered on the client-side, while having data fed to it by an ASP.NET Core / ASP.NET MVC back-end. This means you can:

- Integrate a dashboard into any place that supports HTTP requests (e.g., see the [GitHub Pages Demo](https://devexpress.github.io/web-dashboard-demo/)).
- Publish Web Dashboard as a part of applications based on Angular, Knockout, Vue and similar frameworks.
- Use the Dashboard side-by-side with [DevExtreme](https://js.devexpress.com) client-side widgets to create highly responsive web apps.

Web Dashboard provides components both for [Angular](https://docs.devexpress.com/Dashboard/400409) and [React](https://docs.devexpress.com/Dashboard/400683), but you can also create a pure [HTML JavaScript Web Dashboard](https://docs.devexpress.com/Dashboard/119108) application.


## Requirements
The application requires the following DevExpress npm packages:

```cmd
npm install devexpress-dashboard devexpress-dashboard-angular @devexpress/analytics-core devextreme devextreme-angular
```

Make sure the following requirements are met:

- The script version on the client should match with libraries version on the server up to a minor version.
- Versions of the DevExpress npm packages should be identical (their major and minor versions should be the same).

## Client-Side Configuration

The client part is an Angular application. You need to import the `DxDashboardControlModule` module and configure the component.

_Files to look at:_

- [app.module.ts](./src/app/app.module.ts)

  Imports the `DxDashboardControlModule` module.
- [app.component.html](./src/app/app.component.html)

  Embeds the `dx-dashboard-control` component.
- [app.component.ts](./src/app/app.component.ts)

  Contains the application logic.

## Server-Side Configuration

The server-side of this project is hosted on the **DevExpress.com**. See the following topics for information on how to create an ASP.NET Core or ASP.NET MVC Web Dashboard server application:

- [Get Started](https://docs.devexpress.com/Dashboard/400423)
- [Server-Side Configuration (ASP.NET Core)](https://docs.devexpress.com/Dashboard/119500)
- [Server-Side Configuration (ASP.NET MVC)](https://docs.devexpress.com/Dashboard/119166)

## License

These files are distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).

## Get More Information

- [Get Started with the current approach](https://docs.devexpress.com/Dashboard/400322)
- [DevExpress Dashboard documentation](https://docs.devexpress.com/Dashboard/12049)
