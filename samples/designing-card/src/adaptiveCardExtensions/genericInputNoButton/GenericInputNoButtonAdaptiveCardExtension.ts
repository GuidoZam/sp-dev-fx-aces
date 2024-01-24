import type { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { GenericInputNoButtonPropertyPane } from './GenericInputNoButtonPropertyPane';

export interface IGenericInputNoButtonAdaptiveCardExtensionProps {
  title: string;
}

export interface IGenericInputNoButtonAdaptiveCardExtensionState {
}

const CARD_VIEW_REGISTRY_ID: string = 'GenericInputNoButton_CARD_VIEW';

export default class GenericInputNoButtonAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IGenericInputNoButtonAdaptiveCardExtensionProps,
  IGenericInputNoButtonAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: GenericInputNoButtonPropertyPane;

  public onInit(): Promise<void> {
    this.state = { };

    // registers the card view to be shown in a dashboard
    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());

    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'GenericInputNoButton-property-pane'*/
      './GenericInputNoButtonPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.GenericInputNoButtonPropertyPane();
        }
      );
  }

  protected renderCard(): string | undefined {
    return CARD_VIEW_REGISTRY_ID;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return this._deferredPropertyPane?.getPropertyPaneConfiguration();
  }
}
