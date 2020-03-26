'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "83fef06807d3ebe280d55328d5348703",
"main.dart.js": "eea0dce955948a775d4265507011f516",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "aece181e73797ccc1cefed14902dab23",
"assets/LICENSE": "3426dee70fc7e90ea129308eb0f8127c",
"assets/AssetManifest.json": "b453020e57339008010315bacf667212",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/lib/official_samples/chip_widget.dart": "0187ba8d55e2add516452ebec92074c5",
"assets/lib/official_samples/list_view_widget.dart": "1f14eacf504598c13ac239490d551996",
"assets/lib/official_samples/base_sample_stateless_widget.dart": "f42711136a85f0c9a23b807996a0d0f5",
"assets/lib/official_samples/center_widget.dart": "e6d3157c0d1623c2d5548c7a0f96f8aa",
"assets/lib/official_samples/sized_box_widget.dart": "38a1453866ae6976e9f2f325deb66aef",
"assets/lib/official_samples/drawer_widget.dart": "f9fe70f9d10f23d6b4d66d6355a083be",
"assets/lib/official_samples/icon_button_widget.dart": "a33bf4cbc94b1dad6c261373b59d104d",
"assets/lib/official_samples/transform_widget.dart": "7a4d078c8bfa52160e5eda851671d866",
"assets/lib/official_samples/clip_path_widget.dart": "0e43c66ad533f84bf6ad7464420a4ab4",
"assets/lib/official_samples/expansion_panel_list_widget.dart": "5510c04c325818806a384669800d2cfb",
"assets/lib/official_samples/container_widget.dart": "a1b78010e8a79447a8eb60356132e41a",
"assets/lib/official_samples/switch_widget.dart": "a2193977849b00576df13b1a45da6200",
"assets/lib/official_samples/animated_opacity_widget.dart": "bb92bbbdacea54f8d0dfab0e53edbff4",
"assets/lib/official_samples/show_cupertino_dialog_widget.dart": "4b342b9c4d2d2501fc0e7d24d8335108",
"assets/lib/official_samples/sized_overflow_box_widget.dart": "5229b576e507238e279d620194a4c0ee",
"assets/lib/official_samples/overflow_box_widget.dart": "7840685c40327b2578ae0146350f831d",
"assets/lib/official_samples/single_child_scroll_view_widget.dart": "32f3e7077ed67d151b0aeb93ab730f9a",
"assets/lib/official_samples/show_about_dialog_widget.dart": "c46b33d833e4f3b6280f8e9e7563e831",
"assets/lib/official_samples/divider_widget.dart": "9df8e8b657fb73b956d1c3597d3f2481",
"assets/lib/official_samples/cupertino_navigation_bar_widget.dart": "6b4b53b6d8395ac6517abc44fe9d60d5",
"assets/lib/official_samples/app_bar_widget.dart": "3fc988da5ba55471aab8aca92c1f99de",
"assets/lib/official_samples/circle_avatar_widget.dart": "37047748881729a90219416d4c58113e",
"assets/lib/official_samples/safe_area_widget.dart": "5d55efe6e7c758c5b0e47ae33c670181",
"assets/lib/official_samples/draggable_widget.dart": "9f4416b8d98f461f6886bf6071774d37",
"assets/lib/official_samples/cupertino_button_widget.dart": "a2ef6f5a8caa014855abcd6fec99539b",
"assets/lib/official_samples/absorb_pointer_widget.dart": "b177c0f3ef88e77536af6f9155805f05",
"assets/lib/official_samples/animated_icon_widget.dart": "770cdfb51eb62702d694271443e7cfa6",
"assets/lib/official_samples/data_table_widget.dart": "795b8886426823c5e6ec2d888e311fb9",
"assets/lib/official_samples/show_modal_bottom_sheet_widget.dart": "499ed501b8418bded4e8984f9b0a67d2",
"assets/lib/official_samples/outline_button_widget.dart": "fcda11a2b74de18eb6cb62789cdb1441",
"assets/lib/official_samples/stack_widget.dart": "2d247c77095d6d69d958ec87964fb4c5",
"assets/lib/official_samples/range_slider_widget.dart": "5c858d8f9c9c82dc929a749e464a4d3b",
"assets/lib/official_samples/media_query_widget.dart": "d369b318efc359f29896fb9ed3a15644",
"assets/lib/official_samples/cupertino_timer_picker_widget.dart": "5577e4a84c068e12971c6dafa21c6be9",
"assets/lib/official_samples/stream_builder_widget.dart": "3a50923f597982bbb369e54a357262a3",
"assets/lib/official_samples/animated_size_widget.dart": "b552bdf12483e4dbaf29caf8a670452d",
"assets/lib/official_samples/sliver_app_bar_widget.dart": "b8941634e7ede7b4792afc829461b46e",
"assets/lib/official_samples/list_wheel_scroll_view_widget.dart": "3093af44167b6422f833fa0c99a1a08f",
"assets/lib/official_samples/widget_span_widget.dart": "a1d8be5c14a77b6f3ab748386834067e",
"assets/lib/official_samples/decorated_box_widget.dart": "4f3471e3590283f1d705b76f6970f452",
"assets/lib/official_samples/cupertino_switch_widget.dart": "917089a45ae57534781a2aff7f613e0c",
"assets/lib/official_samples/checkbox_list_tile_widget.dart": "42a3257cba4661df06d2a0d7b7ba65fa",
"assets/lib/official_samples/form_widget.dart": "023eab261aef1f013ae6bb782836afb9",
"assets/lib/official_samples/row_widget.dart": "5ff679cc55940dd573288cc0598052f2",
"assets/lib/official_samples/card_widget.dart": "fb4de2e1b403dd047b2ea9c6753ba605",
"assets/lib/official_samples/rotated_box_widget.dart": "80c65d97ec51e6f1f87bb90c5eeaeb78",
"assets/lib/official_samples/stepper_widget.dart": "b9ab881b71063bb89f75b5736f253cf0",
"assets/lib/official_samples/cupertino_action_sheet_widget.dart": "0bb94c2feb0450f6e9324ef4d95c6e63",
"assets/lib/official_samples/scrollbar_widget.dart": "74ab55ec691a6f5a5b1098f8f1113bfe",
"assets/lib/official_samples/show_search_widget.dart": "652e076d446e8e735256a909bda7c24e",
"assets/lib/official_samples/limited_box_widget.dart": "9b42b98695007ba08a144410eea1a6f9",
"assets/lib/official_samples/list_tile_widget.dart": "aa49627b43370b89ca99b3abc9c8a3b2",
"assets/lib/official_samples/flutter_logo_widget.dart": "bb5647022ba41930b69f29227fac9b87",
"assets/lib/official_samples/positioned_widget.dart": "c3b462aa86da04bf5ad505924b0f99a2",
"assets/lib/official_samples/rich_text_widget.dart": "9207341df9ac53c6a42f6ec13f5aa0eb",
"assets/lib/official_samples/banner_widget.dart": "e58e6a5842728e3dca6396a0b8317fef",
"assets/lib/official_samples/animated_switcher_widget.dart": "6315ed0bc6fb6943ee69a6d6182e6a41",
"assets/lib/official_samples/animated_positioned_widget.dart": "8fa279b9163780adf9c0df793ced4e1a",
"assets/lib/official_samples/physical_model_widget.dart": "376d2aff72b989ea87a6017c702c4dd6",
"assets/lib/official_samples/show_license_page_widget.dart": "996c98eb01067a2da63ccdbbb51e31b2",
"assets/lib/official_samples/dismissible_widget.dart": "205d8862f0b381d0143aa884ed7a4b25",
"assets/lib/official_samples/timer_picker_widget.dart": "a102c6ad0d42277e4940df3c68a7f38a",
"assets/lib/official_samples/bottom_sheet_widget.dart": "a12a0ea32ba0e680e4253b326dc6a6ca",
"assets/lib/official_samples/padding_widget.dart": "15a0b7063fa07bb45af8320501a1b0d4",
"assets/lib/official_samples/linear_progress_indicator_widget.dart": "e885f00491ad5f8bd699f224dfeadd7c",
"assets/lib/official_samples/custom_paint_widget.dart": "864c8663cd82d844d1da4007354666ca",
"assets/lib/official_samples/date_picker_widget.dart": "0489ef01c2c1ecae131540dd57b64929",
"assets/lib/official_samples/scaffold_widget.dart": "a366e6c1d931ea5c34b3b6f8b93b2468",
"assets/lib/official_samples/reorderable_listview_widget.dart": "880e8940e1521e095e1a58d7af983143",
"assets/lib/official_samples/custom_scroll_view_widget.dart": "6ee48dd43441b3610a4a46aa8e94c7e8",
"assets/lib/official_samples/icon_widget.dart": "1023c80fbb6bc20c6298719055e0c0be",
"assets/lib/official_samples/clip_r_rect_widget.dart": "e5b151b8bbf2fd1f6a0fc35c78c24cb7",
"assets/lib/official_samples/flexible_widget.dart": "b556784ea06d6d3ff4a6fbf6f183955b",
"assets/lib/official_samples/check_box_widget.dart": "ae6d10419609bc677ff8586154cc2593",
"assets/lib/official_samples/inkwell_widget.dart": "b43dbb9a223ff5e9146645b69f77e70a",
"assets/lib/official_samples/simple_dialog_widget.dart": "cde52da2d56b191ec2756c70a67071f9",
"assets/lib/official_samples/indexed_stack_widget.dart": "e76957b6d89116b3224816733185870c",
"assets/lib/official_samples/fade_in_image_widget.dart": "ff16e751d7a4775fba75b70cb5ec5958",
"assets/lib/official_samples/table_widget.dart": "82ac7641041fb0955b63771f4c801daf",
"assets/lib/official_samples/radio_widget.dart": "377d16a5b2f9b9827b2ec169da671568",
"assets/lib/official_samples/clip_rect_widget.dart": "9ff2dca3d8eecc0b245bf8a31e254dcd",
"assets/lib/official_samples/flat_button_widget.dart": "e438abcced13f336805d24cd0da0875b",
"assets/lib/official_samples/gesture_detector_widget.dart": "4f74b121656d75d95c86606aab6331e8",
"assets/lib/official_samples/animated_physical_model_widget.dart": "85ef4ede5e22008ef26859b76147d84d",
"assets/lib/official_samples/rotation_transition_widget.dart": "64c32ca830e39411e07caacce830972e",
"assets/lib/official_samples/clip_oval_widget.dart": "bc8040b5d230c34fa1a75264a787d6b4",
"assets/lib/official_samples/slider_widget.dart": "eb168582e0281b2fae147f492eba9719",
"assets/lib/official_samples/opacity_widget.dart": "71ed2d68bb41555e08d8efcc98f825e2",
"assets/lib/official_samples/cupertino_alert_dialog_widget.dart": "4ba24e44fbcd3ad72a80551cfde7291d",
"assets/lib/official_samples/column_widget.dart": "4f085a360ffcd33e1696cb6c46f3f288",
"assets/lib/official_samples/toggle_buttons_wodget.dart": "f30c1984f2c1589bc4fa6ef918d74ef4",
"assets/lib/official_samples/text_field_widget.dart": "4963efce9fc711fd6e58cbaa1d37c2f9",
"assets/lib/official_samples/image_widget.dart": "b4c89af0edf729946e6d125536d39732",
"assets/lib/official_samples/placeholder_widget.dart": "7ec9706bd82b6df5affeacfa7ff0a7d5",
"assets/lib/official_samples/button_bar_widget.dart": "2bc5727ddc45bc8db147a6220b3dcacc",
"assets/lib/official_samples/circular_progress_indicator_widget.dart": "bc182e85bdc465a6455bcc890499d794",
"assets/lib/official_samples/tooltip_widget.dart": "9532b02f132fc133528fa622baf2d280",
"assets/lib/official_samples/cupertino_context_menu_widget.dart": "50534da200352403c0cfd78e99eecf03",
"assets/lib/official_samples/grid_view_widget.dart": "19778ada0083b2fbca5e48cbd2ca9496",
"assets/lib/official_samples/floating_action_button_widget.dart": "8e144695661dc64c974bce3f6c95b6eb",
"assets/lib/official_samples/cupertino_page_scaffold_widget.dart": "838b359abf508cb5350b27116799127c",
"assets/lib/official_samples/animated_builder_widget.dart": "ff11a623853ee5f82be6b08669b2c624",
"assets/lib/official_samples/show_general_dialog_widget.dart": "72ba39893975e125fb27d156e7ecedc9",
"assets/lib/official_samples/animated_container_widget.dart": "3424cea59583cf2949e5da8404e2e302",
"assets/lib/official_samples/show_dialog_widget.dart": "dd0204e480d42fbd82144e3eb7fa023d",
"assets/lib/official_samples/text_form_field_widget.dart": "5362d48634eab5285c8b3b10c5edeea3",
"assets/lib/official_samples/flow_widget.dart": "627d4e58b10e0e0e981a819b20c35a0a",
"assets/lib/official_samples/layout_builder_widget.dart": "6b61eb6c0b4433b651239dc82491fd7e",
"assets/lib/official_samples/tab_bar_view_widget.dart": "3d7cd423f41b27feed281b85097dec80",
"assets/lib/official_samples/baseline_widget.dart": "252fcd2e11df359b7976b7e8f74f7edf",
"assets/lib/official_samples/alert_dialog_widget.dart": "ae473859aa3f86a5daf566705b04cf1d",
"assets/lib/official_samples/animated_align_widget.dart": "0990df2baae7728ec612fafc162f5f89",
"assets/lib/official_samples/vertical_divider_widget.dart": "26e2f03424ebfb0fbd9a644b1c65e2ed",
"assets/lib/official_samples/nested_scroll_view_widget.dart": "4e376429742ee7c1f08e4bf596ef1637",
"assets/lib/official_samples/bottom_navigation_bar_widget.dart": "f2b8df894f385d89aaad9897d7885105",
"assets/lib/official_samples/semantics_widget.dart": "238f3f6d198ea8a623a1004332e4e711",
"assets/lib/official_samples/intrinsic_width_widget.dart": "e1666f2cfb850d3796e45224074a05bc",
"assets/lib/official_samples/show_menu_widget.dart": "f605e0786ba190d7225d8f85516187a1",
"assets/lib/official_samples/text_widget.dart": "76d250f08f023da27c861dd0e87aa863",
"assets/lib/official_samples/hero_widget.dart": "d6842d0713e52fff512e5239c6e6d3ab",
"assets/lib/official_samples/animated_list_widget.dart": "2a78a49eed95b5caadd860e8112dc078",
"assets/lib/official_samples/cupertino_activity_indicator_widget.dart": "508399d34cc422c17f31a2b3d58b4463",
"assets/lib/official_samples/backdrop_filter_widget.dart": "d1a0c0da87d2a056ea4cd478a898f58d",
"assets/lib/official_samples/cupertino_date_picker_widget.dart": "598de68594d29a9da4ebc5931383026b",
"assets/lib/official_samples/decorated_box_transition_widget.dart": "fbc3d682973188e2cc8eb3678623990a",
"assets/lib/official_samples/page_view_widget.dart": "de50f359aac0083d5b7cd847ef152691",
"assets/lib/official_samples/constrained_box_widget.dart": "37719ecb9b93263342b92653bbc78537",
"assets/lib/official_samples/default_text_style_widget.dart": "fa365609e3be2c8b68f2866618d02780",
"assets/lib/official_samples/tab_bar_widget.dart": "4f961f9d244620e34ce97d0fe8716374",
"assets/lib/official_samples/cupertino_slider_widget.dart": "5e4e4f1e8e3ffb81e044f29bde0ad05a",
"assets/lib/official_samples/animated_default_text_style_widget.dart": "60f17cb70aef09d08389c7a3cd0936d7",
"assets/lib/official_samples/bottom_app_bar_widget.dart": "a8573ff62cce422d8ebb7da7400bce46",
"assets/lib/official_samples/positioned_transition_widget.dart": "b79b37c35fae497836271aca2c1331c6",
"assets/lib/official_samples/popup_menu_button_widget.dart": "ec9b81dbcdad7c0856df240645938b09",
"assets/lib/official_samples/snack_bar_widget.dart": "4b023e7fb4b535fcf09ab3658c562a63",
"assets/lib/official_samples/expanded_widget.dart": "52fce2bf0bd3e07e1cbd1eb390104bdc",
"assets/lib/official_samples/fitted_box_widget.dart": "c05bd1843e6423e3b18c972ecb9b420d",
"assets/lib/official_samples/future_builder_widget.dart": "e56e313af57a116775d4e3f26b5fba9d",
"assets/lib/official_samples/cupertino_tab_bar_widget.dart": "3e1b94519e0c5f5c11ab6819590ea94e",
"assets/lib/official_samples/wrap_widget.dart": "de51c3abd619735175303fbba777c13f",
"assets/lib/official_samples/animated_padding_widget.dart": "d10f9e1b3c7c849145c8c414f0dc01ae",
"assets/lib/official_samples/show_cupertino_modal_popup_widget.dart": "f8c7312d68230cca640aaa9e9909c3bc",
"assets/lib/official_samples/spacer_widget.dart": "3ae31366d3d4f4f182c1d835070f6e69",
"assets/lib/official_samples/animated_cross_fade_widget.dart": "b6af904387b356abaebd87bcc5a82273",
"assets/lib/official_samples/radio_list_tile_widget.dart": "986a42194119d72567810319b420b8b0",
"assets/lib/official_samples/refresh_indicator_widget.dart": "df81e95f169415786b9d82ccabac5c69",
"assets/lib/official_samples/aspect_ratio_widget.dart": "44fc039364a0016b76ca64047fd2d640",
"assets/lib/official_samples/base_sample_stateful_widget.dart": "95cc68ae9dfdef6d261a5b9f57450809",
"assets/lib/official_samples/raised_button_widget.dart": "3c5fee87fdc0a448f5305f1ad28b80c5",
"assets/lib/official_samples/align_widget.dart": "f8a4f906676d3bf708c7287b176bb292",
"assets/lib/official_samples/show_bottom_sheet_widget.dart": "9194a5caecb14c75c5b419ac02b09198",
"assets/lib/official_samples/dropdown_button_widget.dart": "9a69aa0d8ef941e6193ce6261569055f",
"assets/lib/official_samples/intrinsic_height_widget.dart": "fd6ae76a3f79c47d10f30137ad8abec9",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/static_text/about_me_introduce": "8f7e3fb37aa92d8f3a162b03de0ac502",
"assets/assets/static_text/privacy": "93a18aa15cbf67b6f068b6d25d34a5fd",
"assets/assets/static_text/agreement": "90a940a0437d73257812fd105fb8a912",
"assets/assets/images/google.webp": "d8040f6415927f99f84adc80f4a59bfd",
"assets/assets/images/github.webp": "1690140eadf130097afa4a4e8ef0b60a",
"assets/assets/images/butterfly.webp": "65423c02126d648fbde90861a2c5a92c",
"assets/assets/images/demo_bg.webp": "c39a6c689219c1642fff14b5bd1264d9",
"assets/assets/images/leading.webp": "7602b6ea4398bb737a33d923089cea6c",
"assets/assets/images/app_icon.webp": "c985af07e73b2417de733dedb0a5dc23",
"assets/assets/images/avator.webp": "baedbefdcb0dc9176e9a23658cff18ef",
"assets/assets/images/loading.webp": "6708ac53cc9d1a0f791d739c24feda7f",
"assets/assets/images/apple.webp": "5916afb31166d99ca87ce89b0a3af0aa",
"assets/assets/lottie/wind_turbines.json": "3350b02a95bce865077caa8571aeb7d5",
"assets/assets/lottie/no_connection.json": "6a1b53f6372eee258e6152ca43bb5d18",
"assets/assets/lottie/coming_soon.json": "d1ae9802da6ed5eea93de95e1472d812",
"assets/assets/lottie/about_me.json": "2c2babd5029aeba3725970f1fe2f883e",
"assets/assets/lottie/long_click.json": "d3eb84db7e1e39f9b0d7a1af59289e42",
"assets/assets/lottie/login_bg.json": "e238c4a537aab9df5e4dd4b83586733b",
"assets/assets/lottie/working.json": "e4462dc9c64e4297e3da5f6339c16465"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
