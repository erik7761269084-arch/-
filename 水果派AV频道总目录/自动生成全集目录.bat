@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul

set "base_dir=%~dp0"
set "outfile=%base_dir%index.html"
setlocal DISABLEDELAYEDEXPANSION
(
echo ^<!DOCTYPE html^>
echo ^<html lang="zh"^>
echo ^<head^>
echo   ^<meta charset="UTF-8"^>
echo   ^<meta name="viewport" content="width=device-width, initial-scale=1"^>
echo   ^<link rel="stylesheet" href="../advertiseStyle.css"^>
echo   ^<title^>^</title^>
echo ^</head^>
echo ^<body^>
echo   ^<h1 id="page-title"^>^</h1^>
echo   ^<div id="advertise"^>
echo     ^<object data="../advertise.html" type="text/html"^>^</object^>
echo     ^<p^>^<a class="back-link" href="../index.html"^>← 返回所有频道总目录^</a^>^</p^>
echo   ^</div^>
echo   ^<hr^>
echo   ^<script^>
echo     // 获取当前路径
echo     let pathParts = window.location.pathname.split("/"^).^filter(p =^>p ^!^== ""^);
echo     // 取倒数第二个部分作为目录名
echo     let folderName = decodeURIComponent(pathParts[pathParts.length - 2]^)^;
echo     // 设置标题
echo     document.getElementById("page-title"^)^.innerText = folderName + " 资源目录";
echo     document.title = folderName; // 同时修改网页标签标题
echo   ^</script^>
echo   ^<h2^>福利姬频道目录^</h2^>
) > "%outfile%"

for /d %%D in (*) do (
    echo   ^<p^>^<a href="./%%D/menu.html"^>%%D^</a^>^</p^> >> "%outfile%"
)

(
echo ^</body^>
echo ^</html^>
) >> "%outfile%"

echo 已生成 %outfile%
pause
