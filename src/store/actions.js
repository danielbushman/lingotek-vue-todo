import {
  RECIEVE_QUALITY_PROGRAMS,
  RECIEVE_ERROR_TYPES,
} from './mutation-types';

const fakeRequest = response => new Promise(resolve => resolve(response));

export default {
  getQualityPrograms({
    commit,
  }) {
    // DUMMY endpoint
    const request = fakeRequest({
      results: [{
        id: 'dcbb996c-6ed3-4e02-92b1-22132853b715',
        name: 'Checkmate',
        community_id: '994851b9-ee13-4387-895f-18952b5e4035',
        description: 'The default Quality Program designed by Lingotek',
        preset_global: true,
        preset_enable: false,
        created_by_id: 'bb685e7b-d195-4af7-9965-2a0f2fdab89f',
        created_by_name: 'admin',
        published: false,
        can_edit: false,
      }, {
        id: 'c411ecf1-e31a-4d3a-be20-e726c6f79183',
        name: 'DQF',
        community_id: '994851b9-ee13-4387-895f-18952b5e4035',
        description: 'The default Quality Program designed by Lingotek',
        preset_global: true,
        preset_enable: false,
        created_by_id: 'bb685e7b-d195-4af7-9965-2a0f2fdab89f',
        created_by_name: 'admin',
        published: false,
        can_edit: false,
      }, {
        id: '0635a27c-bd3d-46fb-bcc2-a5da0a2380ad',
        name: 'From Checkmate',
        community_id: 'ad59581e-dec7-4814-88fb-8114c606d1ab',
        description: 'Created from industry standard Checkmate',
        preset_global: false,
        preset_enable: true,
        created_by_id: 'd6896d96-9d5b-47e6-bc7e-ee277c4a3561',
        created_by_name: 'Daniel Bushman',
        published: false,
        can_edit: true,
        version: {
          version: 1528330938571,
        },
      }, {
        id: 'fd7f9ca4-e56a-4719-b983-a5d4b606571b',
        name: 'Nifty Program',
        community_id: 'ad59581e-dec7-4814-88fb-8114c606d1ab',
        description: '',
        preset_global: false,
        preset_enable: true,
        created_by_id: 'd6896d96-9d5b-47e6-bc7e-ee277c4a3561',
        created_by_name: 'Daniel Bushman',
        published: true,
        can_edit: true,
        version: {
          version: 1528134758988,
        },
      }, {
        id: '87cbbea2-c3c8-4e3d-8bd3-cc9843f4a89e',
        name: 'Fancy Quality Program',
        community_id: 'ad59581e-dec7-4814-88fb-8114c606d1ab',
        description: 'Created new',
        preset_global: false,
        preset_enable: true,
        created_by_id: 'd6896d96-9d5b-47e6-bc7e-ee277c4a3561',
        created_by_name: 'Daniel Bushman',
        published: false,
        can_edit: true,
        version: {
          version: 1528135474116,
        },
      }, {
        id: '87cbbea2-c3c8-4e3d-8bd3-cc9843f4a891e',
        name: 'Fanciest Quality Program',
        community_id: 'ad59581e-dec7-4814-88fb-8114c606d1ab',
        description: 'Created new',
        preset_global: false,
        preset_enable: true,
        created_by_id: 'd6896d96-9d5b-47e6-bc7e-ee277c4a3561',
        created_by_name: 'Daniel Bushman',
        published: false,
        can_edit: true,
        version: {
          version: 1528135474116,
        },
      }, {
        id: '87cbbea2-c3c8-4e3d-8bd3-cc9843f4a89e',
        name: 'Fanciest Quality Program!!! Infinity.',
        community_id: 'ad59581e-dec7-4814-88fb-8114c606d1ab',
        description: 'Created new',
        preset_global: false,
        preset_enable: true,
        created_by_id: 'd6896d96-9d5b-47e6-bc7e-ee277c4a3561',
        created_by_name: 'Daniel Bushman',
        published: false,
        can_edit: true,
        version: {
          version: 1528135474116,
        },
      }],
    });
    return request.then(({
      results,
    }) => {
      commit(RECIEVE_QUALITY_PROGRAMS, results);
    });
  },
  getErrorTypes({
    commit,
  }) {
    // DUMMY endpoint
    const request = fakeRequest({
      results: [{
        id: '20945e0c-fc8f-41a4-abb4-2f3c1332fbe0',
        name: 'Third-party style',
        alias: 'Third-party style',
        help_text: 'The text violates a third-party style guide.',
      }, {
        id: 'e2b94f11-4c79-45a5-ab05-5dd8da19a307',
        name: 'Grammatical register',
        alias: 'Grammatical register',
        help_text: 'The content uses the wrong grammatical register, such as using informal pronouns or verb forms when their formal counterparts are required.',
      }, {
        id: 'cbeed936-d74d-499b-b5fb-a80bf2855b49',
        name: 'Omission',
        alias: 'Omission',
        help_text: 'Content is missing from the translation that is present in the source.',
      }, {
        id: 'edfb35db-6b5c-404c-808f-376c55e8ebde',
        name: 'Shortcut key',
        alias: 'Shortcut key',
        help_text: 'A translated software product uses shortcuts that do not conform to locale expectations or that make no sense for the locale.',
      }, {
        id: '8555d3a0-bc0c-41cb-8ccd-a719a3300480',
        name: 'Under-translation',
        alias: 'Under-translation',
        help_text: 'The target text is less specific than the source text.',
      }, {
        id: 'a3a8d75b-386b-4fb7-bc0f-995007784519',
        name: 'Non-conformance',
        alias: 'Non-conformance',
        help_text: 'The content is deemed to show poor statistical conformance to a reference corpus. Higher severity values reflect poorer conformance.',
      }, {
        id: '5168a5cb-2c21-42d3-94de-c7a0643d7911',
        name: 'Missing text',
        alias: 'Missing text',
        help_text: 'Existing text is missing in the final laid-out version.',
      }, {
        id: '76d5a447-5c61-48dc-b6b0-921e085262c5',
        name: 'Truncation/text expansion',
        alias: 'Truncation/text expansion',
        help_text: 'Truncation-text-expansion.',
      }, {
        id: '94246bd9-2e27-4466-8809-77e07c731474',
        name: 'Punctuation',
        alias: 'Punctuation',
        help_text: 'Is used incorrectly (for the locale or style).',
      }, {
        id: '72338903-14ef-4e64-b7df-2440562cf3ea',
        name: 'Culture-specific reference',
        alias: 'Culture-specific reference',
        help_text: 'Content inappropriately uses a culture-specific reference that will not be understandable to the intended audience.',
      }, {
        id: '8472d242-756b-41e9-9191-a7b3447d1cae',
        name: 'Untranslated',
        alias: 'Untranslated',
        help_text: 'Content that should have been translated has been left untranslated.',
      }, {
        id: '4a9cbd77-154c-45e6-91ba-86d15839fd07',
        name: 'Company style',
        alias: 'Company style',
        help_text: 'The text violates company/organization-specific style guidelines.',
      }, {
        id: '8e479511-f7ae-4189-8572-3750e3785ca8',
        name: 'Link/cross-reference',
        alias: 'Link/cross-reference',
        help_text: 'Links are inconsistent in the text.',
      }, {
        id: 'a6bb2556-2eb7-483b-946d-0ca460ad8601',
        name: 'Duplication',
        alias: 'Duplication',
        help_text: 'Content has been duplicated improperly.',
      }, {
        id: 'f9bcece7-7c3b-4b62-871d-56aa3031a1a9',
        name: 'Addition',
        alias: 'Addition',
        help_text: 'The target text includes text not present in the source.',
      }, {
        id: 'c9c85b1a-0b1b-4c6d-9086-f373704164f3',
        name: 'Telephone format',
        alias: 'Telephone format',
        help_text: 'Content uses the wrong form for telephone numbers.',
      }, {
        id: '15c4b38e-cecf-4a31-849d-607be94a8416',
        name: 'Inconsistent with termbase',
        alias: 'Inconsistent with termbase',
        help_text: 'A term is used inconsistently with a specified termbase.',
      }, {
        id: '0f80bcfb-8591-4e1f-a207-1dc6c4114af8',
        name: 'Whitespace',
        alias: 'White Space Differences',
        help_text: 'There is a mismatch in whitespace between source and target content or the text violates specific rules related to the use of whitespace.',
      }, {
        id: '393d2324-2646-4a5c-a57b-d7bc96f58c2f',
        name: 'Spelling',
        alias: 'Spelling',
        help_text: 'Issues related to spelling of words.',
      }, {
        id: 'd8efc45d-b63c-41b6-b113-7b1c609d9ea4',
        name: 'Character encoding',
        alias: 'Character encoding',
        help_text: 'Characters are garbled due to incorrect application of an encoding.',
      }, {
        id: 'b362c393-f686-4032-b74b-7a8612add07a',
        name: 'Numbers',
        alias: 'Numbers',
        help_text: 'Numbers are inconsistent between source and target.',
      }, {
        id: '40f2599f-2d59-4d34-96b5-c95bbe0083c2',
        name: 'Kudos',
        alias: 'Kudos',
        help_text: 'Used to praise for exceptional achievement.',
      }, {
        id: '99cc6eb7-b73d-4f7b-98fc-49e35280dc45',
        name: 'Markup',
        alias: 'Markup',
        help_text: 'Issues related to markup (codes used to represent structure or formatting of text, also known as tags).',
      }, {
        id: '25d33917-bc31-40ed-b997-abff3223988f',
        name: 'Locale violation',
        alias: 'Locale Violation',
        help_text: 'Text violates norms for the intended locale.',
      }, {
        id: '6c69c590-1d30-45c6-8021-5361b1bfd2a6',
        name: 'Inconsistent style',
        alias: 'Inconsistent style',
        help_text: 'Style is inconsistent within a text.',
      }, {
        id: '19ccdb26-e404-4f00-963e-669ab6a68f63',
        name: 'Measurement format',
        alias: 'Measurement format',
        help_text: 'A text uses a measurement format inappropriate for its locale.',
      }, {
        id: 'a3849554-210d-41fd-b547-c86fb89d196c',
        name: 'Style',
        alias: 'Style',
        help_text: 'The text contains stylistic errors.',
      }, {
        id: 'cdf4666e-fe62-4c67-9b39-7d33dd6a907c',
        name: 'Improper exact TM match',
        alias: 'Improper exact TM match',
        help_text: 'An translation is provided as an exact match from a translation memory (TM) system but is actually incorrect.',
      }, {
        id: 'e5e4b93b-ad15-4c1f-8e09-b0e28ada4fbe',
        name: 'Local formatting',
        alias: 'Local formatting',
        help_text: 'Issues related to local formatting (rather than to overall layout concerns).',
      }, {
        id: '6bd19f9c-4900-473b-9433-a5fdc0f48aec',
        name: 'Address format',
        alias: 'Address format',
        help_text: 'Content uses the wrong format for addresses.',
      }, {
        id: '57f891a0-4166-4f99-b92a-e47075f0f056',
        name: 'Uncategorized',
        alias: 'Uncategorized',
        help_text: 'The issue either has not been categorized or cannot be categorized.',
      }, {
        id: 'ec7bf14a-5f0c-416a-966c-666dbde10b21',
        name: 'Pattern problem',
        alias: 'Unexpected Patterns',
        help_text: 'The text fails to match a pattern that defines allowable content (or matches one that defines non-allowable content).',
      }, {
        id: 'e0088657-83ed-4ca7-b3a3-e11907052188',
        name: 'Inconsistent entities',
        alias: 'Inconsistent entities',
        help_text: 'The source and target text contain different named entities (dates, times, place names, individual names, etc.)',
      }, {
        id: '241e653b-b456-4d66-a38b-927e2ba5bc5f',
        name: 'Internationalization',
        alias: 'Internationalization',
        help_text: 'There is an issue related to the internationalization of content.',
      }, {
        id: '051e0d5f-ae8a-434d-869f-cb330df0998d',
        name: 'Grammar',
        alias: 'Grammar',
        help_text: 'Issues related to the grammar or syntax of the text, other than spelling and orthography.',
      }, {
        id: 'abf39420-d23d-4c21-a208-c17b55c41f53',
        name: 'Inconsistency',
        alias: 'Inconsistency',
        help_text: 'The text shows internal inconsistency.',
      }, {
        id: 'ea937c2b-d425-4f9f-b55c-24065a5add10',
        name: 'Awkward',
        alias: 'Awkward',
        help_text: 'A text is written with an awkward style.',
      }, {
        id: 'd74171c7-c577-4687-815e-a8a498565d0a',
        name: 'Date format',
        alias: 'Date format',
        help_text: 'A text uses a date format inappropriate for its locale.',
      }, {
        id: '44bd4d0c-ead0-4c02-a8a9-983cca239fc6',
        name: 'Unidiomatic',
        alias: 'Unidiomatic',
        help_text: 'The content is grammatical, but not idiomatic.',
      }, {
        id: 'd4b19db8-2d31-45dc-82d2-c20bb855b2c7',
        name: 'Length',
        alias: 'Length',
        help_text: 'There is a significant discrepancy between the source and the target text lengths.',
      }, {
        id: 'c6facdd4-8620-47cd-ba24-59d5d9573fea',
        name: 'Inconsistent use of terminology',
        alias: 'Inconsistent use of terminology',
        help_text: 'Terminology is used in an inconsistent manner within the text.',
      }, {
        id: '64702641-b0e8-49be-b89b-33ddead08770',
        name: 'Mistranslation',
        alias: 'Mistranslation',
        help_text: 'The target content does not accurately represent the source content.',
      }, {
        id: 'eae5bf58-06bc-4520-bdb5-bff83668ba49',
        name: 'Other',
        alias: 'Other',
        help_text: 'Any other issues.',
      }, {
        id: 'f87cd692-0368-4d77-bef0-82ace40abd41',
        name: 'Legal',
        alias: 'Legal',
        help_text: 'The text is legally problematic (e.g., it is specific to the wrong legal system).',
      }, {
        id: 'daa990bf-f2e5-4468-9144-2dbc0909ea4d',
        name: 'Currency format',
        alias: 'Currency format',
        help_text: 'Content uses the wrong format for currency.',
      }, {
        id: '58079f99-375c-45cf-a1b3-eeb27040f34e',
        name: 'Over-translation',
        alias: 'Over-translation',
        help_text: 'The target text is more specific than the source text.',
      }],
    });
    return request.then(({
      results,
    }) => {
      commit(RECIEVE_ERROR_TYPES, results);
    });
  },
};
