var isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && "false" != localStorage.getItem("isDark");
document.getElementById("theme").checked = isDark, isDark && (DarkReader.enable({
    brightness: 100,
    contrast: 100,
    sepia: 0
}), document.getElementById("github-stats").src = "https://stats.elias.eu.org/api?username=eliasbenb&show_icons=true&include_all_commits=true&count_private=true&role=OWNER,ORGANIZATION_MEMBER,COLLABORATOR&title_color=0366D6&text_color=b5b5b5&icon_color=FFFFFF&bg_color=181A1B&hide_border=true"), document.getElementById("theme").onchange = function() {
    isDark = document.getElementById("theme").checked, localStorage.setItem("isDark", `${isDark}`), isDark ? (DarkReader.enable({
        brightness: 100,
        contrast: 100,
        sepia: 0
    }), document.getElementById("github-stats").src = "https://stats.elias.eu.org/api?username=eliasbenb&show_icons=true&include_all_commits=true&count_private=true&role=OWNER,ORGANIZATION_MEMBER,COLLABORATOR&title_color=0366D6&text_color=b5b5b5&icon_color=FFFFFF&bg_color=181A1B&hide_border=true") : (DarkReader.disable(), document.getElementById("github-stats").src = "https://stats.elias.eu.org/api?username=eliasbenb&show_icons=true&include_all_commits=true&count_private=true&role=OWNER,ORGANIZATION_MEMBER,COLLABORATOR&title_color=0366D6&text_color=121212&icon_color=FFFFFF&bg_color=ffffff&hide_border=true")
};