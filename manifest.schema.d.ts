/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Your integration's name.
 */
export type IntegrationName = string;
/**
 * A semantic version of the integration. See https://semver.org for more info.
 */
export type Version = string;
/**
 * A short-one liner describing your integration
 */
export type ShortDescription = string;
/**
 * A longer description of your integration
 */
export type LongDescription = string;
/**
 * Details about your integration and next steps if the installation happens outside of LaunchDarkly
 */
export type LearnMoreDetails = string;
/**
 * Name of the author or organization responsible for the integration
 */
export type Author = string;
/**
 * Email address for your integration's support
 */
export type SupportEmail = string;
/**
 * URL to your website
 */
export type Website = string;
/**
 * URL to the LaunchDarkly documentation for this integration
 */
export type LaunchDarklyDocumentation = string;
/**
 * URL to your organization's privacy policy
 */
export type PrivacyPolicy = string;
/**
 * URL to your integration's support website
 */
export type SupportWebsite = string;
/**
 * Categories that describe your integration
 */
export type Categories =
  | [
      | "analytics"
      | "approval"
      | "authentication"
      | "automation"
      | "code-references"
      | "data"
      | "developer-tools"
      | "infrastructure"
      | "issue-tracking"
      | "log-management"
      | "messaging"
      | "monitoring"
      | "notifications"
    ]
  | [
      (
        | "analytics"
        | "approval"
        | "authentication"
        | "automation"
        | "code-references"
        | "data"
        | "developer-tools"
        | "infrastructure"
        | "issue-tracking"
        | "log-management"
        | "messaging"
        | "monitoring"
        | "notifications"
      ),
      (
        | "analytics"
        | "approval"
        | "authentication"
        | "automation"
        | "code-references"
        | "data"
        | "developer-tools"
        | "infrastructure"
        | "issue-tracking"
        | "log-management"
        | "messaging"
        | "monitoring"
        | "notifications"
      )
    ]
  | [
      (
        | "analytics"
        | "approval"
        | "authentication"
        | "automation"
        | "code-references"
        | "data"
        | "developer-tools"
        | "infrastructure"
        | "issue-tracking"
        | "log-management"
        | "messaging"
        | "monitoring"
        | "notifications"
      ),
      (
        | "analytics"
        | "approval"
        | "authentication"
        | "automation"
        | "code-references"
        | "data"
        | "developer-tools"
        | "infrastructure"
        | "issue-tracking"
        | "log-management"
        | "messaging"
        | "monitoring"
        | "notifications"
      ),
      (
        | "analytics"
        | "approval"
        | "authentication"
        | "automation"
        | "code-references"
        | "data"
        | "developer-tools"
        | "infrastructure"
        | "issue-tracking"
        | "log-management"
        | "messaging"
        | "monitoring"
        | "notifications"
      )
    ];
/**
 * A square version of your integration's logo in SVG format
 */
export type SquareLogo = string;
/**
 * A horizontal version of your integration's logo in SVG format
 */
export type HorizontalLogo = string;
/**
 * Kind of legacy integration
 */
export type Kind = "codeRefs" | "datadog" | "dataExport" | "slackWebhooks" | "webhooks";
/**
 * Whether the integration authenticates using OAuth
 */
export type RequiresOAuth = boolean;
/**
 * A key will be used as the token name when the variable is substituted
 */
export type Key = string;
/**
 * A descriptive name that will be used as the form label on the UI
 */
export type Name = string;
/**
 * The type of the variable
 */
export type Type = "string" | "boolean" | "uri" | "enum" | "oauth" | "dynamicEnum";
/**
 * Describes the variable in the UI. Markdown links allowed.
 */
export type Description = string;
/**
 * Placeholder value to use in the form element if applicable
 */
export type Description1 = string;
/**
 * Secret variables will be masked in the UI
 */
export type IsThisVariableASecret = boolean;
/**
 * Variables marked as optional won't be required on the UI
 */
export type IsThisVariableOptional = boolean;
/**
 * Default value for variable. Can be overridden by user in the UI
 */
export type DefaultValue = boolean | string;
/**
 * allowed string values for enum-type formVariables
 */
export type AllowedValues = string[];
/**
 * URL to send the request to. You can use {{template markup}} to inject a formVariable into the url.
 */
export type URL = string;
/**
 * HTTP method to use when LaunchDarkly makes the request to your endpoint
 */
export type HTTPMethod = "POST" | "PUT" | "PATCH" | "GET" | "DELETE";
/**
 * Name of the header
 */
export type Name1 = string;
/**
 * Value of the header. Form variables can be substituted in using {{variableName}}
 */
export type Value = string;
/**
 * Headers to send with the webhook request
 */
export type HTTPHeaders = HeaderItems[];
/**
 * JSON path to the array containing options for parsing
 */
export type OptionsArrayPath = string;
/**
 * Relative JSON path to values for each item in the options array to be used as UI dropdown labels
 */
export type Label = string;
/**
 * Relative JSON path to values for each item in the options array to be used as dropdown values
 */
export type Value1 = string;
/**
 * Form variables will be rendered on the integration configuration page. These are variables you need an admin to supply when they enable the integration. Examples of a form variable include `apiToken` or `url`.
 */
export type FormVariables = FormVariable[];
/**
 * Template to use for flag events
 */
export type FlagTemplate = string;
/**
 * Template to use for project events
 */
export type ProjectTemplate = string;
/**
 * Template to use for environment events
 */
export type EnvironmentTemplate = string;
/**
 * Template to use if the event does not have a corresponding named template
 */
export type DefaultTemplate = string;
/**
 * Template to use when sending test events with the 'validate connection' button
 */
export type ValidationTemplate = string;
/**
 * LaunchDarkly policy that allows you to filter events sent to your webhook. See https://docs.launchdarkly.com/docs/policies-in-custom-roles for more information.
 */
export type DefaultPolicy = [Policy, ...Policy[]];
/**
 * A list of action specifiers defining the actions to which the statement applies. See https://docs.launchdarkly.com/docs/actions-in-custom-roles for more information.
 */
export type Actions = string[];
/**
 * This attribute defines whether the statement allows or denies access to the named resources and actions.
 */
export type Effect = "allow" | "deny";
/**
 * A list of action specifiers defining the actions to which the statement does not apply. See https://docs.launchdarkly.com/docs/actions-in-custom-roles for more information.
 */
export type NotActions = string[];
/**
 * A list of resource specifiers defining the resources to which the statement does not apply. See https://docs.launchdarkly.com/docs/resources-in-custom-roles for more information.
 */
export type NotResources = string[];
/**
 * A list of resource specifiers defining the resources to which the statement applies. See https://docs.launchdarkly.com/docs/resources-in-custom-roles for more information.
 */
export type Resources = string[];
/**
 * The reserved custom property's display name.
 */
export type Name2 = string;
/**
 * The custom property's API response key.
 */
export type Key1 = string;
/**
 * This capability will reserve integration-specific custom property options in the global flag setting configuration. These custom properties will only be presented to users after they have have configured an integration subscription. Read https://docs.launchdarkly.com/home/advanced/custom-properties for more information on custom properties
 */
export type ReservedCustomProperties = {
  name: Name2;
  key: Key1;
  [k: string]: unknown;
}[];
/**
 * URL to documentation describing how to configure the integration.
 */
export type DocumentationLink = string;
/**
 * Authentication type - currently the only option is sharedSecret.
 */
export type Authentication = "sharedSecret";
/**
 * The default event name string used in the audit log if an eventName cannot be parsed in the trigger request body.
 */
export type DefaultEventName = string;
/**
 * The expected eventName of the integration partner's test events
 */
export type TestEventNameRegex = string;
/**
 * JSON pointer to an event name
 */
export type EventNamePointer = string;
/**
 * JSON pointer to a metric value
 */
export type ValuePointer = string;
/**
 * JSON pointer to the external alert URL
 */
export type URLPointer = string;
/**
 * JSON path to the array containing integration member details
 */
export type MemberArrayPath = string;
/**
 * Relative JSON path to the email field in each member item in the array
 */
export type Email = string;
/**
 * Relative JSON path to the integration member ID field in each member item in the array
 */
export type MemberID = string;
/**
 * Environment-specific form variables that render on the environment approval settings modal
 */
export type EnvironmentFormVariables = FormVariable[];
/**
 * Externally-created approval entity ID
 */
export type ApprovalIDPointer = string;
/**
 * JSON pointer to a status value
 */
export type StatusValuePointer = string;
/**
 * JSON pointer to a human-readable status
 */
export type StatusValueDisplayPointer = string;
/**
 * regex pattern used to determine if the approval should be considered 'approved'
 */
export type ApprovalMatcher = string;
/**
 * regex pattern used to determine if the approval should be considered 'rejected'
 */
export type RejectionMatcher = string;
/**
 * expected format for the external creation request URL. Values can be substituted in using {{value}}
 */
export type URLTemplate = string;

/**
 * Describes the capabilities and intent of a LaunchDarkly integration
 */
export interface LaunchDarklyIntegrationsManifest {
  name: IntegrationName;
  version: Version;
  overview: ShortDescription;
  description: LongDescription;
  details?: LearnMoreDetails;
  author: Author;
  supportEmail: SupportEmail;
  links: Links;
  categories: Categories;
  icons: Icons;
  legacy?: Legacy;
  requiresOAuth?: RequiresOAuth;
  formVariables?: FormVariables;
  capabilities?: Capabilities;
  [k: string]: unknown;
}
/**
 * A set of reference links supporting your integration
 */
export interface Links {
  site: Website;
  launchdarklyDocs?: LaunchDarklyDocumentation;
  privacyPolicy: PrivacyPolicy;
  supportWebsite?: SupportWebsite;
  [k: string]: unknown;
}
/**
 * Logos describing your integration in SVG format
 */
export interface Icons {
  square: SquareLogo;
  horizontal: HorizontalLogo;
  [k: string]: unknown;
}
/**
 * Legacy integration
 */
export interface Legacy {
  kind: Kind;
  [k: string]: unknown;
}
/**
 * A form variable describes an object property that the LaunchDarkly admin will be prompted for when they configure an integration.
 */
export interface FormVariable {
  key: Key;
  name: Name;
  type: Type;
  description: Description;
  placeholder?: Description1;
  isSecret?: IsThisVariableASecret;
  isOptional?: IsThisVariableOptional;
  defaultValue?: DefaultValue;
  allowedValues?: AllowedValues;
  dynamicOptions?: DynamicOptions;
  [k: string]: unknown;
}
/**
 * Parser and endpoint for handling dynamicEnum
 */
export interface DynamicOptions {
  endpoint: Endpoint;
  parser: DynamicOptionsParser;
  [k: string]: unknown;
}
/**
 * Properties that describe an HTTP request to an external endpoint
 */
export interface Endpoint {
  url: URL;
  method: HTTPMethod;
  headers?: HTTPHeaders;
  [k: string]: unknown;
}
/**
 * A name and value pair to send as headers with the hook request
 */
export interface HeaderItems {
  name: Name1;
  value: Value;
  [k: string]: unknown;
}
/**
 * Mapping of property names to location in JSON response
 */
export interface DynamicOptionsParser {
  optionsPath: OptionsArrayPath;
  optionsItems: OptionsArray;
  [k: string]: unknown;
}
export interface OptionsArray {
  label: Label;
  value: Value1;
  [k: string]: unknown;
}
/**
 * Specify which capabilities you'd like your integration to have
 */
export interface Capabilities {
  auditLogEventsHook?: AuditLogEventsHook;
  reservedCustomProperties?: ReservedCustomProperties;
  trigger?: Trigger;
  approval?: Approval;
  [k: string]: unknown;
}
/**
 * This capability will enable LaunchDarkly to send audit log event webhooks to your endpoint.
 */
export interface AuditLogEventsHook {
  endpoint: Endpoint;
  templates: WebhookBodyTemplate;
  defaultPolicy?: DefaultPolicy;
  [k: string]: unknown;
}
/**
 * Templates to use for body of the webhook request
 */
export interface WebhookBodyTemplate {
  flag?: FlagTemplate;
  project?: ProjectTemplate;
  environment?: EnvironmentTemplate;
  default?: DefaultTemplate;
  validation?: ValidationTemplate;
  [k: string]: unknown;
}
/**
 * A LaunchDarkly policy. See https://docs.launchdarkly.com/docs/policies-in-custom-roles for more information.
 */
export interface Policy {
  actions?: Actions;
  effect?: Effect;
  notActions?: NotActions;
  notResources?: NotResources;
  resources?: Resources;
  [k: string]: unknown;
}
/**
 * This capability is used to manage inbound webhook entry points that trigger feature flag changes in LaunchDarkly
 */
export interface Trigger {
  documentation: DocumentationLink;
  auth?: Authentication;
  defaultEventName?: DefaultEventName;
  testEventNameRegexp?: TestEventNameRegex;
  parser?: TriggerParser;
  [k: string]: unknown;
}
/**
 * Describes a mapping of property name to a location in the JSON response payload specified by a JSON pointer
 */
export interface TriggerParser {
  eventName?: EventNamePointer;
  value?: ValuePointer;
  url?: URLPointer;
  [k: string]: unknown;
}
/**
 * This capability enables integration-driven flag change approvals
 */
export interface Approval {
  memberListRequest: MemberListRequest;
  environmentFormVariables?: EnvironmentFormVariables;
  creationRequest: CreationRequest;
  statusRequest: StatusRequest;
  postApplyRequest: PostApplyRequest;
  deletionRequest: DeletionRequest;
  [k: string]: unknown;
}
/**
 * Describes the HTTP request to get integration users for mapping to Launchdarkly users
 */
export interface MemberListRequest {
  endpoint: Endpoint;
  parser: MemberListParser;
  [k: string]: unknown;
}
/**
 * Describes a mapping of integration member information to a location in the JSON response payload specified by a JSON pointer
 */
export interface MemberListParser {
  memberArrayPath: MemberArrayPath;
  memberItems: MemberItemsArray;
  [k: string]: unknown;
}
export interface MemberItemsArray {
  email: Email;
  memberId: MemberID;
  [k: string]: unknown;
}
/**
 * Describes the approval creation HTTP request and the parser used to process the JSON response
 */
export interface CreationRequest {
  endpoint: Endpoint;
  parser?: ApprovalParser;
  [k: string]: unknown;
}
/**
 * Describes a mapping of property names to a location in the JSON response payload specified by a JSON pointer
 */
export interface ApprovalParser {
  approvalId?: ApprovalIDPointer;
  statusValue: StatusValuePointer;
  statusDisplay?: StatusValueDisplayPointer;
  approvalMatcher: ApprovalMatcher;
  rejectionMatcher?: RejectionMatcher;
  urlTemplate?: URLTemplate;
  [k: string]: unknown;
}
/**
 * Describes the approval status check HTTP request and the parser used to determine if the approval should be consider approved or rejected
 */
export interface StatusRequest {
  endpoint: Endpoint;
  parser: ApprovalParser;
  [k: string]: unknown;
}
/**
 * Describes the HTTP request to make after the changes have been applied in LaunchDarkly
 */
export interface PostApplyRequest {
  endpoint: Endpoint;
  parser: ApprovalParser;
  [k: string]: unknown;
}
/**
 * Describes the HTTP request for the deletion of the external approval entity
 */
export interface DeletionRequest {
  endpoint: Endpoint;
  parser: ApprovalParser;
  [k: string]: unknown;
}
