import { expect, it } from 'vitest';
import { mergeCspConfigsToSet } from '../src/merge-csp-configs-to-set';
import {
  CSP_PRESET_DATADOG_INTAKE_URLS,
  CSP_PRESET_DATADOG_WEB_WORKER,
  CSP_PRESET_GOOGLE_ADS_CONVERSIONS,
  CSP_PRESET_GOOGLE_ADS_REMARKETING,
  CSP_PRESET_GOOGLE_ADS_USER_DATA_BEACON,
  CSP_PRESET_GOOGLE_TAG_MANAGER_CUSTOM_JAVASCRIPT_VARIABLES,
  CSP_PRESET_GOOGLE_TAG_MANAGER_NONCE,
  CSP_PRESET_GOOGLE_TAG_MANAGER_PREVIEW_MODE,
  CSP_PRESET_GOOGLE_TAG_MANAGER_UNSAFE_INLINE,
  CSP_PRESET_HOTJAR,
} from '../src/presets';

it('should merge Datadog presets', () => {
  const mergedConfigsSet = mergeCspConfigsToSet([
    CSP_PRESET_DATADOG_INTAKE_URLS,
    CSP_PRESET_DATADOG_WEB_WORKER,
  ]);
  expect(mergedConfigsSet).toMatchSnapshot();
});

it('should merge Google Ads presets', () => {
  const mergedConfigsSet = mergeCspConfigsToSet([
    CSP_PRESET_GOOGLE_ADS_CONVERSIONS,
    CSP_PRESET_GOOGLE_ADS_REMARKETING,
    CSP_PRESET_GOOGLE_ADS_USER_DATA_BEACON,
  ]);
  expect(mergedConfigsSet).toMatchSnapshot();
});

it('should merge Google Tag Manager presets', () => {
  const mergedConfigsSet = mergeCspConfigsToSet([
    CSP_PRESET_GOOGLE_TAG_MANAGER_NONCE,
    CSP_PRESET_GOOGLE_TAG_MANAGER_UNSAFE_INLINE,
    CSP_PRESET_GOOGLE_TAG_MANAGER_CUSTOM_JAVASCRIPT_VARIABLES,
    CSP_PRESET_GOOGLE_TAG_MANAGER_PREVIEW_MODE,
  ]);
  expect(mergedConfigsSet).toMatchSnapshot();
});

it('should merge different categories of presets', () => {
  const mergedConfigsSet = mergeCspConfigsToSet([
    CSP_PRESET_DATADOG_INTAKE_URLS,
    CSP_PRESET_DATADOG_WEB_WORKER,
    CSP_PRESET_GOOGLE_ADS_CONVERSIONS,
    CSP_PRESET_GOOGLE_ADS_REMARKETING,
    CSP_PRESET_GOOGLE_ADS_USER_DATA_BEACON,
    CSP_PRESET_GOOGLE_TAG_MANAGER_UNSAFE_INLINE,
    CSP_PRESET_GOOGLE_TAG_MANAGER_CUSTOM_JAVASCRIPT_VARIABLES,
    CSP_PRESET_GOOGLE_TAG_MANAGER_PREVIEW_MODE,
    CSP_PRESET_HOTJAR,
  ]);
  expect(mergedConfigsSet).toMatchSnapshot();
});
