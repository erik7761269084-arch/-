@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

REM ==== 配置 ====
set "BASE_DIR=E:\频道管理大全\GirlPhoto\actress_all"
set "TEMPLATE_FILE=%BASE_DIR%\test.html"

REM ==== 遍历子目录 ====
for /d %%D in ("%BASE_DIR%\*") do (
    set "SUBDIR_NAME=%%~nxD"
    set "TARGET_FILE=%BASE_DIR%\!SUBDIR_NAME!.html"

    REM 复制模板到当前目录并重命名为子目录名.html
    copy "%TEMPLATE_FILE%" "!TARGET_FILE!" >nul

    REM 替换 HTML 内容中的 test 为子目录名
    powershell -Command "(Get-Content -Raw '!TARGET_FILE!') -replace 'test','!SUBDIR_NAME!' | Set-Content '!TARGET_FILE!' -Encoding UTF8"

    echo 已生成 !TARGET_FILE!
)

echo ===== 完成 =====
pause
