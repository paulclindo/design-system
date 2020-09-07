import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

// make sure to call your modifers as last to be in cascade
const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};
    &:hover, &:focus {
      background-color: ${theme.status.warningColorHover};
      outline: 3px solid ${theme.status.warningColorHover};
    }
    &:active {
      background-color: ${theme.status.warningColorActive}
    }
  `,
  primaryButtonWarning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
  `,
  error: () => `
    background: none;
    color: ${defaultTheme.status.errorColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 3px solid ${defaultTheme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.errorColorActive};
    }
  `,
  primaryButtonError: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonError: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
  `,
  success: () => `
    background: none;
    color: ${defaultTheme.status.successColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 3px solid ${defaultTheme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonSuccess: () => `
    border: 2px solid ${defaultTheme.status.successColor};
  `,
};

const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: ${typeScale.paragraph};
  padding: 12px 24px;
  background: none;
  min-width: 100px;
  font-family: 'Roboto Mono', monospace;
  transition: background-color 0.2s linear, color: 0.2s linear;
  &:hover {
    background-color: ${({ theme }) => theme.primaryHoverColor};
    color: ${({ theme }) => theme.textColorOnPrimary}
  }
  &:focus {
    outline: 3px solid ${({ theme }) => theme.primaryHoverColor};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${({ theme }) => theme.primaryActiveColor};
    color: ${({ theme }) => theme.textColorOnPrimary};
    border-color: ${({ theme }) => theme.primaryActiveColor}
  }
  &:disabled {
    color: ${({ theme }) => theme.textOnDisabled};
    border-color: ${({ theme }) => theme.disabled};
    cursor: not-allowed;
  }
`;
const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColorOnPrimary};
  &:disabled {
    background: ${({ theme }) => theme.disabled};
    color: ${({ theme }) => theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
const SecondaryButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryColor};
  &:disabled {
    background: none;
    color: ${({ theme }) => theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
const TertiaryButton = styled(Button)`
  color: ${({ theme }) => theme.primaryColor};
  &:disabled {
    background: none;
    color: ${({ theme }) => theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
