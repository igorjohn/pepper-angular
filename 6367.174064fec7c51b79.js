"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[6367],{6367:(q,o,u)=>{u.r(o),u.d(o,{TypographyModule:()=>c,routes:()=>r});var n=u(9132),l=u(3848),m=u(2003),d=u(4466),e=u(4650),p=u(5767);const a=function(){return["."]},r=[{path:"",component:(()=>{class i{constructor(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["typography"]],decls:402,vars:16,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-2xl","prose","prose-sm"],["href","https://github.com/tailwindlabs/tailwindcss-typography","target","_blank"],["fuse-highlight","","lang","html"],[1,"max-w-2xl","my-8","border-b-4"],[1,"lead"],[3,"routerLink"],["src","assets/images/pages/help-center/image-1.jpg","alt",""],[1,"table","table-striped","table-bordered"]],template:function(t,g){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"User Interface"),e.qZA()()(),e.TgZ(7,"div",5)(8,"h2",6),e._uU(9," Typography "),e.qZA()()()(),e.TgZ(10,"div",7)(11,"div",8)(12,"h2"),e._uU(13,"Body font size"),e.qZA(),e.TgZ(14,"p"),e._uU(15," The default body text is set to "),e.TgZ(16,"strong"),e._uU(17,"14px"),e.qZA(),e._uU(18,". This allows building more complex and dense layouts without needing too much screen space. Applications usually need to show a lot more information on one page compared to, let's say, a blog post. This requires more denser layouts hence the smaller default body font size. "),e.qZA(),e.TgZ(19,"h2"),e._uU(20,"Rich text"),e.qZA(),e.TgZ(21,"p"),e._uU(22," When building a web application, you don't want to have default HTML element styles interfering with your design. This is because those style are designed for building web sites, therefore, Fuse takes advantage of Tailwind's reset styles to reset all element styles by default. "),e.qZA(),e.TgZ(23,"p"),e._uU(24," This way, you can build complex layouts and application interfaces without needing to reset element styles over and over again. "),e.qZA(),e.TgZ(25,"p"),e._uU(26," But this introduce a new problem when you actually want to show a rich-text content with paragraphs, lists, links, titles and other HTML elements. They will look bad and they won't be properly styled. "),e.qZA(),e.TgZ(27,"p"),e._uU(28," To overcome this issue, Fuse uses "),e.TgZ(29,"a",9),e._uU(30," Tailwind's Official Typography Plugin "),e.qZA(),e._uU(31," \xa0which adds "),e.TgZ(32,"code"),e._uU(33,"prose"),e.qZA(),e._uU(34," class to provide typographic defaults: "),e.qZA(),e.TgZ(35,"textarea",10),e._uU(36,'                <div class="prose">\n                    \x3c!-- Some rich-text content with paragraphs, lists, links and etc. --\x3e\n                </div>\n            '),e.qZA(),e.TgZ(37,"p"),e._uU(38," Here's an example content that's been wrapped with the "),e.TgZ(39,"code"),e._uU(40,"prose"),e.qZA(),e._uU(41," class: "),e.qZA()(),e._UZ(42,"div",11),e.TgZ(43,"div",8)(44,"h1"),e._uU(45,"Typography Demo"),e.qZA(),e.TgZ(46,"p",12),e._uU(47," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam lab et fugiat id magnam minus nemo quam voluptatem. Culpa deleniti explica nisi quod soluta. "),e.qZA(),e.TgZ(48,"p"),e._uU(49," Alias animi labque, deserunt distinctio eum excepturi fuga iure labore magni molestias mollitia natus, officia pofro quis sunt temporibus veritatis voluptatem, voluptatum. Aut blanditiis esse et illum maxim, obcaecati possimus voluptate! Accusamus "),e.TgZ(50,"em"),e._uU(51,"adipisci"),e.qZA(),e._uU(52," amet aperiam, assumenda consequuntur fugiat inventore iusto magnam molestias natus necessitatibus, nulla pariatur. "),e.qZA(),e.TgZ(53,"p"),e._uU(54," Amet distinctio enim itaque minima minus nesciunt recusandae soluta voluptatibus: "),e.qZA(),e.TgZ(55,"blockquote")(56,"p"),e._uU(57," Ad aliquid amet asperiores lab distinctio doloremque "),e.TgZ(58,"code"),e._uU(59,"eaque"),e.qZA(),e._uU(60,", exercitationem explicabo, minus mollitia natus necessitatibus odio omnis pofro rem. "),e.qZA()(),e.TgZ(61,"p"),e._uU(62," Alias architecto asperiores, dignissimos illum ipsam ipsum itaque, natus necessitatibus officiis, perferendis quae sed ullam veniam vitae voluptas! Magni, nisi, quis! A "),e.TgZ(63,"code"),e._uU(64,"accusamus"),e.qZA(),e._uU(65," animi commodi, consectetur distinctio eaque, eos excepturi illum laboriosam maiores nam natus nulla officiis perspiciatis rem "),e.TgZ(66,"em"),e._uU(67,"reprehenderit"),e.qZA(),e._uU(68," sed tenetur veritatis. "),e.qZA(),e.TgZ(69,"p"),e._uU(70," Consectetur "),e.TgZ(71,"code"),e._uU(72,"dicta enim"),e.qZA(),e._uU(73," error eveniet expedita, facere in itaque labore "),e.TgZ(74,"em"),e._uU(75,"natus"),e.qZA(),e._uU(76," quasi? Ad consectetur eligendi facilis magni quae quis, quo temporibus voluptas voluptate voluptatem! "),e.qZA(),e.TgZ(77,"p"),e._uU(78," Adipisci alias animi "),e.TgZ(79,"code"),e._uU(80,"debitis"),e.qZA(),e._uU(81," eos et impedit maiores, modi nam nobis officia optio perspiciatis, rerum. Accusantium esse nostrum odit quis quo: "),e.qZA(),e.TgZ(82,"pre")(83,"code"),e._uU(84),e.qZA()(),e.TgZ(85,"p"),e._uU(86," Accusantium aut autem, lab deleniti eaque fugiat fugit id ipsa iste molestiae, "),e.TgZ(87,"a",13),e._uU(88,"necessitatibus nemo quasi"),e.qZA(),e._uU(89," . "),e.qZA(),e._UZ(90,"hr"),e.TgZ(91,"h2"),e._uU(92," Accusantium aspernatur autem enim "),e.qZA(),e.TgZ(93,"p"),e._uU(94," Blanditiis, fugit voluptate! Assumenda blanditiis consectetur, labque cupiditate ducimus eaque earum, fugiat illum ipsa, necessitatibus omnis quaerat reiciendis totam. Architecto, "),e.TgZ(95,"strong"),e._uU(96,"facere"),e.qZA(),e._uU(97," illum molestiae nihil nulla quibusdam quidem vel! Atque "),e.TgZ(98,"em"),e._uU(99,"blanditiis deserunt"),e.qZA(),e._uU(100,". "),e.qZA(),e.TgZ(101,"p"),e._uU(102," Debitis deserunt doloremque labore laboriosam magni minus odit: "),e.qZA(),e.TgZ(103,"ol")(104,"li"),e._uU(105,"Asperiores dicta esse maiores nobis officiis."),e.qZA(),e.TgZ(106,"li"),e._uU(107,"Accusamus aliquid debitis dolore illo ipsam molettiae possimus."),e.qZA(),e.TgZ(108,"li"),e._uU(109,"Magnam mollitia pariatur perspiciatis quasi quidem tenetur voluptatem! Adipisci aspernatur assumenda dicta."),e.qZA()(),e.TgZ(110,"p"),e._uU(111," Animi fugit incidunt iure magni maiores molestias. "),e.qZA(),e.TgZ(112,"h3"),e._uU(113," Consequatur iusto soluta "),e.qZA(),e.TgZ(114,"p"),e._uU(115," Aliquid asperiores corporis \u2014 deserunt dolorum ducimus eius eligendi explicabo quaerat suscipit voluptas. "),e.qZA(),e.TgZ(116,"p"),e._uU(117," Deserunt dolor eos et illum laborum magni molestiae mollitia: "),e.qZA(),e.TgZ(118,"blockquote")(119,"p"),e._uU(120,"Autem beatae consectetur consequatur, facere, facilis fugiat id illo, impedit numquam optio quis sunt ducimus illo."),e.qZA()(),e.TgZ(121,"p"),e._uU(122," Adipisci consequuntur doloribus facere in ipsam maxime molestias pofro quam: "),e.qZA(),e.TgZ(123,"figure"),e._UZ(124,"img",14),e.TgZ(125,"figcaption"),e._uU(126," Accusamus blanditiis labque delectus esse et eum excepturi, impedit ipsam iste maiores minima mollitia, nihil obcaecati placeat quaerat qui quidem sint unde! "),e.qZA()(),e.TgZ(127,"p"),e._uU(128," A beatae lab deleniti explicabo id inventore magni nisi omnis placeat praesentium quibusdam: "),e.qZA(),e.TgZ(129,"ul")(130,"li"),e._uU(131,"Dolorem eaque laboriosam omnis praesentium."),e.qZA(),e.TgZ(132,"li"),e._uU(133,"Atque debitis delectus distinctio doloremque."),e.qZA(),e.TgZ(134,"li"),e._uU(135,"Fuga illo impedit minima mollitia neque obcaecati."),e.qZA()(),e.TgZ(136,"p"),e._uU(137," Consequ eius eum excepturi explicabo. "),e.qZA(),e.TgZ(138,"h2"),e._uU(139," Adipisicing elit atque impedit? "),e.qZA(),e.TgZ(140,"h3"),e._uU(141," Atque distinctio doloremque ea qui quo, repellendus. "),e.qZA(),e.TgZ(142,"p"),e._uU(143," Delectus deserunt explicabo facilis numquam quasi! Laboriosam, magni, quisquam. Aut, blanditiis commodi distinctio, facere fuga hic itaque iure labore laborum maxime nemo neque provident quos recusandae sequi veritatis illum inventore iure qui rerum sapiente. "),e.qZA(),e.TgZ(144,"h3"),e._uU(145," Accusamus iusto sint aperiam consectetur \u2026 "),e.qZA(),e.TgZ(146,"p"),e._uU(147," Aliquid assumenda ipsa nam odit pofro quaerat, quasi recusandae sint! Aut, esse explicabo facilis fugit illum iure magni necessitatibus odio quas. "),e.qZA(),e.TgZ(148,"ul")(149,"li")(150,"p")(151,"strong"),e._uU(152,"Dolore natus placeat rem atque dignissimos laboriosam."),e.qZA()(),e.TgZ(153,"p"),e._uU(154," Amet repudiandae voluptates architecto dignissimos repellendus voluptas dignissimos eveniet itaque maiores natus. "),e.qZA(),e.TgZ(155,"p"),e._uU(156," Accusamus aliquam debitis delectus dolorem ducimus enim eos, exercitationem fugiat id iusto nostrum quae quos recusandae reiciendis rerum sequi temporibus veniam vero? Accusantium culpa, cupiditate ducimus eveniet id maiores modi mollitia nisi aliquid dolorum ducimus et illo in. "),e.qZA()(),e.TgZ(157,"li")(158,"p")(159,"strong"),e._uU(160,"Ab amet deleniti dolor, et hic optio placeat."),e.qZA()(),e.TgZ(161,"p"),e._uU(162," Accusantium ad alias beatae, consequatur consequuntur eos error eveniet expedita fuga laborum libero maxime nulla pofro praesentium rem rerum saepe soluta ullam vero, voluptas? Architecto at debitis, doloribus harum iure libero natus odio optio soluta veritatis voluptate. "),e.qZA()(),e.TgZ(163,"li")(164,"p")(165,"strong"),e._uU(166,"At aut consectetur nam necessitatibus neque nesciunt."),e.qZA()(),e.TgZ(167,"p"),e._uU(168," Aut dignissimos labore nobis nostrum optio! Dolor id minima velit voluptatibus. Aut consequuntur eum exercitationem fuga, harum id impedit molestiae natus neque numquam perspiciatis quam rem voluptatum. "),e.qZA()()(),e.TgZ(169,"p"),e._uU(170," Animi aperiam autem labque dolore enim ex expedita harum hic id impedit ipsa laborum modi mollitia non perspiciatis quae ratione. "),e.qZA(),e.TgZ(171,"h2"),e._uU(172," Alias eos excepturi facilis fugit. "),e.qZA(),e.TgZ(173,"p"),e._uU(174," Alias asperiores, aspernatur corporis "),e.TgZ(175,"a",13),e._uU(176,"delectus"),e.qZA(),e._uU(177," est "),e.TgZ(178,"a",13),e._uU(179,"facilis"),e.qZA(),e._uU(180," inventore dolore ipsa nobis nostrum officia quia, veritatis vero! At dolore est nesciunt numquam quam. Ab animi "),e.TgZ(181,"em"),e._uU(182,"architecto"),e.qZA(),e._uU(183," aut, dignissimos eos est eum explicabo. "),e.qZA(),e.TgZ(184,"p"),e._uU(185," Adipisci autem consequuntur "),e.TgZ(186,"code"),e._uU(187,"labque cupiditate"),e.qZA(),e._uU(188," dolor ducimus fuga neque nesciunt: "),e.qZA(),e.TgZ(189,"pre")(190,"code"),e._uU(191),e.qZA()(),e.TgZ(192,"p"),e._uU(193," Aliquid aspernatur eius fugit hic iusto. "),e.qZA(),e.TgZ(194,"h3"),e._uU(195," Dolorum ducimus expedita? "),e.qZA(),e.TgZ(196,"p"),e._uU(197," Culpa debitis explicabo maxime minus quaerat reprehenderit temporibus! Asperiores, cupiditate ducimus esse est expedita fuga hic ipsam necessitatibus placeat possimus? Amet animi aut consequuntur earum eveniet. "),e.qZA(),e.TgZ(198,"ol")(199,"li")(200,"strong"),e._uU(201,"Aspernatur at beatae corporis debitis."),e.qZA(),e.TgZ(202,"ul")(203,"li"),e._uU(204," Aperiam assumenda commodi lab dicta eius, \u201cfugit ipsam\u201c itaque iure molestiae nihil numquam, officia omnis quia repellendus sapiente sed. "),e.qZA(),e.TgZ(205,"li"),e._uU(206," Nulla odio quod saepe accusantium, adipisci autem blanditiis lab doloribus. "),e.qZA(),e.TgZ(207,"li"),e._uU(208," Explicabo facilis iusto molestiae nisi nostrum obcaecati officia. "),e.qZA()()(),e.TgZ(209,"li")(210,"strong"),e._uU(211,"Nobis odio officiis optio quae quis quisquam quos rem."),e.qZA(),e.TgZ(212,"ul")(213,"li"),e._uU(214,"Modi pariatur quod totam. Deserunt doloribus eveniet, expedita."),e.qZA(),e.TgZ(215,"li"),e._uU(216,"Ad beatae dicta et fugit libero optio quaerat rem repellendus./"),e.qZA(),e.TgZ(217,"li"),e._uU(218,"Architecto atque consequuntur corporis id iste magni."),e.qZA()()(),e.TgZ(219,"li")(220,"strong"),e._uU(221,"Deserunt non placeat unde veniam veritatis? Odio quod."),e.qZA(),e.TgZ(222,"ul")(223,"li"),e._uU(224,"Inventore iure magni quod repellendus tempora. Magnam neque, quia. Adipisci amet."),e.qZA(),e.TgZ(225,"li"),e._uU(226,"Consectetur adipisicing elit."),e.qZA(),e.TgZ(227,"li"),e._uU(228,"labque eum expedita illo inventore iusto laboriosam nesciunt non, odio provident."),e.qZA()()()(),e.TgZ(229,"p"),e._uU(230," A aliquam architecto consequatur labque dicta doloremque "),e.TgZ(231,"code"),e._uU(232,"<li>"),e.qZA(),e._uU(233," doloribus, ducimus earum, est "),e.TgZ(234,"code"),e._uU(235,"<p>"),e.qZA(),e._uU(236," eveniet explicabo fuga fugit ipsum minima minus molestias nihil nisi non qui sunt vel voluptatibus? A dolorum illum nihil quidem. "),e.qZA(),e.TgZ(237,"ul")(238,"li")(239,"p")(240,"strong"),e._uU(241,"Laboriosam nesciunt obcaecati optio qui."),e.qZA()(),e.TgZ(242,"p"),e._uU(243," Doloremque magni molestias reprehenderit. "),e.qZA(),e.TgZ(244,"ul")(245,"li"),e._uU(246,"Accusamus aperiam blanditiis "),e.TgZ(247,"code"),e._uU(248,"<p>"),e.qZA(),e._uU(249," commodi"),e.qZA(),e.TgZ(250,"li"),e._uU(251,"Dolorum ea explicabo fugiat in ipsum"),e.qZA()()(),e.TgZ(252,"li")(253,"p")(254,"strong"),e._uU(255,"Commodi dolor dolorem dolores eum expedita libero."),e.qZA()(),e.TgZ(256,"p"),e._uU(257," Accusamus alias consectetur dolores et, excepturi fuga iusto possimus. "),e.qZA(),e.TgZ(258,"ul")(259,"li")(260,"p"),e._uU(261," Accusantium ad alias atque aut autem consequuntur deserunt dignissimos eaque iure "),e.TgZ(262,"code"),e._uU(263,"<p>"),e.qZA(),e._uU(264," maxime. "),e.qZA(),e.TgZ(265,"p"),e._uU(266," Dolorum in nisi numquam omnis quam sapiente sit vero. "),e.qZA()(),e.TgZ(267,"li")(268,"p"),e._uU(269," Adipisci lab in nisi odit soluta sunt vitae commodi excepturi. "),e.qZA()()()(),e.TgZ(270,"li")(271,"p"),e._uU(272," Assumenda deserunt distinctio dolor iste mollitia nihil non? "),e.qZA()()(),e.TgZ(273,"p"),e._uU(274," Consectetur adipisicing elit dicta dolor iste. "),e.qZA(),e.TgZ(275,"h2"),e._uU(276," Consectetur ea natus officia omnis reprehenderit. "),e.qZA(),e.TgZ(277,"p"),e._uU(278," Distinctio impedit quaerat sed! Accusamus "),e.TgZ(279,"a",13),e._uU(280,"aliquam aspernatur enim expedita explicabo"),e.qZA(),e._uU(281," . Libero molestiae odio quasi unde ut? Ab exercitationem id numquam odio quisquam! "),e.qZA(),e.TgZ(282,"p"),e._uU(283," Explicabo facilis nemo quidem natus tempore: "),e.qZA(),e.TgZ(284,"table",15)(285,"thead")(286,"tr")(287,"th"),e._uU(288,"Wrestler"),e.qZA(),e.TgZ(289,"th"),e._uU(290,"Origin"),e.qZA(),e.TgZ(291,"th"),e._uU(292,"Finisher"),e.qZA()()(),e.TgZ(293,"tbody")(294,"tr")(295,"td"),e._uU(296,"Bret \u201cThe Hitman\u201d Hart"),e.qZA(),e.TgZ(297,"td"),e._uU(298,"Calgary, AB"),e.qZA(),e.TgZ(299,"td"),e._uU(300,"Sharpshooter"),e.qZA()(),e.TgZ(301,"tr")(302,"td"),e._uU(303,"Stone Cold Steve Austin"),e.qZA(),e.TgZ(304,"td"),e._uU(305,"Austin, TX"),e.qZA(),e.TgZ(306,"td"),e._uU(307,"Stone Cold Stunner"),e.qZA()(),e.TgZ(308,"tr")(309,"td"),e._uU(310,"Randy Savage"),e.qZA(),e.TgZ(311,"td"),e._uU(312,"Sarasota, FL"),e.qZA(),e.TgZ(313,"td"),e._uU(314,"Elbow Drop"),e.qZA()(),e.TgZ(315,"tr")(316,"td"),e._uU(317,"Vader"),e.qZA(),e.TgZ(318,"td"),e._uU(319,"Boulder, CO"),e.qZA(),e.TgZ(320,"td"),e._uU(321,"Vader Bomb"),e.qZA()(),e.TgZ(322,"tr")(323,"td"),e._uU(324,"Razor Ramon"),e.qZA(),e.TgZ(325,"td"),e._uU(326,"Chuluota, FL"),e.qZA(),e.TgZ(327,"td"),e._uU(328,"Razor\u2019s Edge"),e.qZA()()()(),e.TgZ(329,"p"),e._uU(330," A aliquid autem lab doloremque, ea earum eum fuga fugit illo ipsa minus natus nisi "),e.TgZ(331,"code"),e._uU(332,"<span>"),e.qZA(),e._uU(333," obcaecati pariatur perferendis pofro "),e.TgZ(334,"code"),e._uU(335,"suscipit tempore"),e.qZA(),e._uU(336,". "),e.qZA(),e.TgZ(337,"h3"),e._uU(338," Ad alias atque culpa "),e.TgZ(339,"code"),e._uU(340,"illum"),e.qZA(),e._uU(341," earum optio "),e.qZA(),e.TgZ(342,"p"),e._uU(343," Architecto consequatur eveniet illo in iure laborum minus omnis quibusdam sequi temporibus? Ab aliquid "),e.TgZ(344,"em"),e._uU(345,"\u201catque dolores molestiae nemo perferendis\u201d"),e.qZA(),e._uU(346," reprehenderit saepe. "),e.qZA(),e.TgZ(347,"p"),e._uU(348," Accusantium aliquid eligendi est fuga natus, "),e.TgZ(349,"code"),e._uU(350,"quos"),e.qZA(),e._uU(351," vel? Adipisci aperiam asperiores aspernatur consectetur cupiditate "),e.TgZ(352,"a",13)(353,"code"),e._uU(354,"@distinctio/doloribus"),e.qZA()(),e._uU(355," et exercitationem expedita, facere facilis illum, impedit inventore ipsa iure iusto magnam, magni minus nesciunt non officia possimus quod reiciendis. "),e.qZA(),e.TgZ(356,"h4"),e._uU(357," Cupiditate explicabo "),e.TgZ(358,"code"),e._uU(359,"hic"),e.qZA(),e._uU(360," maiores "),e.qZA(),e.TgZ(361,"p"),e._uU(362," Aliquam amet consequuntur distinctio "),e.TgZ(363,"code"),e._uU(364,"ea"),e.qZA(),e._uU(365," est "),e.TgZ(366,"code"),e._uU(367,"excepturi"),e.qZA(),e._uU(368," facere illum maiores nisi nobis non odit officiis quisquam, similique tempora temporibus, tenetur ullam "),e.TgZ(369,"code"),e._uU(370,"voluptates"),e.qZA(),e._uU(371," adipisci aperiam deleniti "),e.TgZ(372,"code"),e._uU(373,"doloremque"),e.qZA(),e._uU(374," ducimus "),e.TgZ(375,"code"),e._uU(376,"eos"),e.qZA(),e._uU(377,". "),e.qZA(),e.TgZ(378,"p"),e._uU(379," Ducimus qui quo tempora. lab enim explicabo "),e.TgZ(380,"code"),e._uU(381,"hic"),e.qZA(),e._uU(382," inventore qui soluta voluptates voluptatum? Asperiores consectetur delectus dolorem fugiat ipsa pariatur, quas "),e.TgZ(383,"code"),e._uU(384,"quos"),e.qZA(),e._uU(385," repellendus "),e.TgZ(386,"em"),e._uU(387,"repudiandae"),e.qZA(),e._uU(388," sunt aut blanditiis. "),e.qZA(),e.TgZ(389,"h3"),e._uU(390," Asperiores aspernatur autem error praesentium quidem. "),e.qZA(),e.TgZ(391,"h4"),e._uU(392," Ad blanditiis commodi, doloribus id iste "),e.TgZ(393,"code"),e._uU(394,"repudiandae"),e.qZA(),e._uU(395," vero vitae. "),e.qZA(),e.TgZ(396,"p"),e._uU(397," Atque consectetur lab debitis enim est et, facere fugit impedit, possimus quaerat quibusdam. "),e.qZA(),e.TgZ(398,"p"),e._uU(399," Dolorem nihil placeat quibusdam veniam? Amet architecto at consequatur eligendi eveniet excepturi hic illo impedit in iste magni maxime modi nisi nulla odio placeat quidem, quos rem repellat similique suscipit voluptate voluptates nobis omnis quo repellendus. "),e.qZA(),e.TgZ(400,"p"),e._uU(401," Assumenda, eum, minima! Autem consectetur fugiat iste sit! Nobis omnis quo repellendus. "),e.qZA()()()()),2&t&&(e.xp6(84),e.AsE("h1 a ","{","\n    display: block;\n    width: 300px;\n    height: 80px;\n","}",""),e.xp6(3),e.Q6J("routerLink","."),e.xp6(88),e.Q6J("routerLink",e.DdM(12,a)),e.xp6(3),e.Q6J("routerLink",e.DdM(13,a)),e.xp6(13),e.xDo("module.exports = ","{","\n    purge: [],\n    theme: ","{","\n        extend: ","{}",",\n    },\n    variants: ","{}",",\n    plugins: [],\n","}",""),e.xp6(88),e.Q6J("routerLink",e.DdM(14,a)),e.xp6(73),e.Q6J("routerLink",e.DdM(15,a)))},dependencies:[n.yS,p.L],encapsulation:2}),i})()}];let c=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[n.Bz.forChild(r),l.Nh,m.$,d.m]}),i})()}}]);