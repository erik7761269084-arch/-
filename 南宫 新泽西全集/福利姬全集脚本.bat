@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

set OUTPUT=menu.html

(
echo ^<!DOCTYPE html^>
echo ^<html lang="zh"^>
echo ^<head^>
echo   ^<meta charset="UTF-8"^>
echo   ^<title>chunmomo^</title^>
echo ^</head^>
echo ^<body^>
echo   ^<h1>chunmomo^</h1^>
echo   ^<hr^>
echo   ^<h2>page_test^</h2^>
echo   ^<p^>^<a href="../index.html"^>返回总目录^</a^>^</p^>
) > %OUTPUT%

for /d %%i in (*) do (
    if exist "%%i\index.html" (
        echo   ^<p^>^<a href="./%%i/index.html"^>%%i^</a^>^</p^> >> %OUTPUT%
    )
)

(
echo.
echo ^</body^>
echo ^</html^>
) >> %OUTPUT%

echo 已生成 %OUTPUT%
pause
