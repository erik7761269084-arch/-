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
echo   ^<title^>chunmomo^</title^>
echo ^</head^>
echo ^<body^>
echo   ^<h1^>chunmomo^</h1^>
echo   ^<div id="advertise"^>
echo     ^<iframe src="advertise.html" frameborder="0" width="100%%" height="100"^>^</iframe^>
echo   ^</div^>
echo   ^<hr^>
echo   ^<h2^>page_test^</h2^>
) > "%outfile%"

for /d %%D in (*) do (
    echo   ^<p^>^<a href="./%%D/index.html"^>%%D^</a^>^</p^> >> "%outfile%"
)

(
echo ^</body^>
echo ^</html^>
) >> "%outfile%"

echo 已生成 %outfile%
pause
