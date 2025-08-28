@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul

set "base_dir=%~dp0"
set "outfile=%base_dir%index.html"

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
echo   ^<div id="111"^>
echo   ^</script^>
echo   ^<h2^>福利姬目录^</h2^>
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
