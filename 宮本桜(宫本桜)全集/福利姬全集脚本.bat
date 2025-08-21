@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: 输出文件
set OUTPUT=menu.html

:: 开始写入 HTML 头部
(
echo ^<!DOCTYPE html^>
echo ^<html lang="zh"^>
echo ^<head^>
echo   ^<meta charset="UTF-8"^>
echo   ^<title>chunmomo^</title^>
echo ^</head^>
echo ^<body^>
echo   ^<h1>chunmomo^</h1^>
echo   ^<div id="advertise"^>
echo     ^<iframe src="../advertise.html" frameborder="0" width="100%%" height="100"^>^</iframe^>
echo   ^</div^>
echo   ^<hr^>
echo   ^<h2>page_test^</h2^>
echo   ^<p^>^<a href="../index.html"^>返回总目录^</a^>^</p^>
) > %OUTPUT%

:: 遍历子目录，生成链接
for /d %%i in (*) do (
    if exist "%%i\index.html" (
        echo   ^<p^>^<a href="./%%i/index.html"^>%%i^</a^>^</p^> >> %OUTPUT%
    )
)

:: 写入 HTML 尾部
(
echo ^</body^>
echo ^</html^>
) >> "%OUTPUT%"

echo 已生成 %OUTPUT%
pause
