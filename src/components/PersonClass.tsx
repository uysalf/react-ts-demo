import * as React from "react";

export interface IAppProps {
  pname: string;
  psurname: string;
}

export interface IAppState {
  loading: boolean;
  themeState: {
    theme: "light";
    isDark: false;
  };
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      loading: true,
      themeState: {
        theme: "light",
        isDark: false,
      },
    };
  }

  public render() {
    return (
      <div>
        <h1>PersonClass.tsx</h1>
        <div>
          <span>Personel Adı:</span>
          <span>{this.props.pname}</span>
          <span>Personel Soyadı:</span>
          <span>{this.props.psurname}</span>
        </div>
        <div>
          <span>themeState:</span>
          <span> {this.state.themeState.theme}</span>
        </div>
      </div>
    );
  }
}
