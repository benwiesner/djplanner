// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    hmr       : false,
    region: 'us-east-1',
    userPoolId: 'us-east-1_csVxlykxq',
    clientId: '4688a36hoavfu52j59pjuntc99',
    identityPoolId: 'us-east-1:55ed0e47-40ed-4320-b6e3-150070f98171',

    cognito_identity_endpoint: '',
    cognito_idp_endpoint: '',
    sts_endpoint: ''
};
