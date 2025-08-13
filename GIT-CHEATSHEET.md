# 📘 Hướng Dẫn Sử Dụng Git & GitHub Cho Team

Chào mừng đến với cẩm nang Git của team! Tài liệu này cung cấp quy trình làm việc chuẩn, các quy ước và công cụ cần thiết để cộng tác hiệu quả, đảm bảo source code luôn ổn định và dễ quản lý, đặc biệt khi team mở rộng quy mô.

Dành cho **Developer**, **Reviewer**, và **Project Manager**.

## 🎯 Mục lục
- [📘 Hướng Dẫn Sử Dụng Git \& GitHub Cho Team](#-hướng-dẫn-sử-dụng-git--github-cho-team)
  - [🎯 Mục lục](#-mục-lục)
    - [1️⃣ Cài đặt ban đầu (Làm một lần duy nhất)](#1️⃣-cài-đặt-ban-đầu-làm-một-lần-duy-nhất)
    - [2️⃣ Vai trò \& Trách nhiệm](#2️⃣-vai-trò--trách-nhiệm)
    - [3️⃣ Quy ước Đặt tên Branch](#3️⃣-quy-ước-đặt-tên-branch)
    - [4️⃣ Luồng làm việc chính](#4️⃣-luồng-làm-việc-chính)
    - [5️⃣ Chiến lược Pull Request \& Review](#5️⃣-chiến-lược-pull-request--review)
      - [**Khi nào cần review?**](#khi-nào-cần-review)
      - [**Template Pull Request:**](#template-pull-request)
      - [**Tiêu chuẩn của một Pull Request tốt:**](#tiêu-chuẩn-của-một-pull-request-tốt)
    - [6️⃣ Quy ước về Commit Message](#6️⃣-quy-ước-về-commit-message)
    - [7️⃣ Quản lý Tag \& Release](#7️⃣-quản-lý-tag--release)
    - [8️⃣ Tích hợp CI/CD](#8️⃣-tích-hợp-cicd)
    - [9️⃣ Các Nguyên tắc Vàng](#9️⃣-các-nguyên-tắc-vàng)
    - [🔟 Git Cheatsheet (Các lệnh thường dùng)](#-git-cheatsheet-các-lệnh-thường-dùng)
    - [1️⃣1️⃣ Xử lý Conflict Nâng cao](#1️⃣1️⃣-xử-lý-conflict-nâng-cao)

---

### 1️⃣ Cài đặt ban đầu (Làm một lần duy nhất)

Trước khi bắt đầu, hãy chắc chắn Git của bạn đã được cấu hình đúng.

```bash
# Cấu hình tên và email sẽ hiển thị trong lịch sử commit
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Cấu hình để 'git pull' mặc định dùng rebase thay vì merge
git config --global pull.rebase true

# (Khuyến nghị) Bật màu cho output của Git để dễ đọc
git config --global color.ui auto

# (Khuyến nghị) Cấu hình editor mặc định (VD: VS Code)
git config --global core.editor "code --wait"
```

**Quan trọng:** 
- Mọi dự án phải có file `.gitignore` để loại bỏ các file không cần thiết (VD: `node_modules`, file build, `.env`,...).
- Sử dụng **Git hooks** (VD: `pre-commit` để chạy linter, formatter) hoặc công cụ như **Husky** để tự động hóa kiểm tra code trước khi commit.

---

### 2️⃣ Vai trò & Trách nhiệm

| Role | Nhiệm vụ chính |
| :--- | :--- |
| 🧑‍💻 **Developer** | - Cài đặt, viết code, và fix bug theo task.<br>- Tuân thủ quy ước đặt tên branch và commit.<br>- Tạo Pull Request (PR) chi tiết khi hoàn thành.<br>- Chủ động sửa code theo feedback.<br>- Đảm bảo code pass CI/CD trước khi tạo PR. |
| 🧐 **Reviewer / PM** | - Review code dựa trên các tiêu chí: logic, hiệu năng, style, và độ an toàn.<br>- Phê duyệt (Approve) hoặc Yêu cầu thay đổi (Request changes).<br>- Merge PR vào `main` hoặc nhánh tích hợp sau khi đã được duyệt.<br>- Quản lý release, tag phiên bản, và đảm bảo `main` luôn sẵn sàng deploy. |
| 🤖 **CI/CD Admin** | - Cấu hình pipeline CI/CD (VD: GitHub Actions, Jenkins).<br>- Đảm bảo các kiểm tra tự động (test, lint, build) hoạt động ổn định.<br>- Hỗ trợ team xử lý lỗi CI/CD khi cần. |

---

### 3️⃣ Quy ước Đặt tên Branch

Sử dụng tiền tố để phân loại mục đích của branch. Công thức: `<type>/<ticket-id>-<short-description>`

| Loại (Type) | Ví dụ | Mục đích |
| :--- | :--- | :--- |
| `feature` | `feature/TICKET-123-user-login` | Phát triển tính năng mới. |
| `bugfix` | `bugfix/TICKET-124-fix-button-bug` | Sửa lỗi trên các branch phát triển. |
| `hotfix` | `hotfix/TICKET-125-fix-critical-payment-issue` | Sửa lỗi khẩn cấp trực tiếp từ `main`. |
| `refactor` | `refactor/optimize-database-query` | Cải thiện code, không thêm/sửa tính năng. |
| `docs` | `docs/update-readme-guide` | Cập nhật tài liệu. |
| `release` | `release/v1.2.0` | Chuẩn bị cho phiên bản phát hành. |

**Lưu ý:** Đảm bảo `<short-description>` ngắn gọn, rõ ràng, sử dụng dấu gạch nối (`-`) thay vì dấu cách hoặc gạch dưới.

---

### 4️⃣ Luồng làm việc chính

Chúng ta áp dụng mô hình **Feature Branch Workflow** với tích hợp CI/CD và quản lý release.

**Sơ đồ luồng làm việc:**
```mermaid
flowchart TD
    A[Bắt đầu: Lấy code mới nhất từ main] --> B{Tạo branch mới theo quy ước};
    B --> C[Code & Commit liên tục];
    C --> D[Push branch lên GitHub];
    D --> E[CI/CD chạy test, lint, build];
    E -->|Pass| F[Tạo Pull Request (PR)];
    E -->|Fail| C;
    F --> G{Reviewer xem xét};
    G -- Yêu cầu thay đổi --> C;
    G -- Phê duyệt --> H[Merge PR vào main];
    H --> I[Tạo tag release nếu cần];
    I --> J[Xóa branch đã merge];
    J --> A;
```

**Các bước chi tiết của Developer:**

1. **Đồng bộ `main`:**
    ```bash
    git checkout main
    git pull origin main
    ```
2. **Tạo branch mới:**
    ```bash
    git checkout -b feature/TICKET-123-user-login
    ```
3. **Làm việc và commit:**
    ```bash
    # ... viết code ...
    git add .
    git commit -m "feat(auth): add email and password fields"
    # ... lặp lại ...
    ```
4. **Push branch lên remote:**
    ```bash
    git push -u origin feature/TICKET-123-user-login
    ```
5. **Chờ CI/CD hoàn tất:** Đảm bảo tất cả kiểm tra (test, lint, build) đều pass.
6. **Tạo Pull Request:** Lên GitHub, tạo PR với template chi tiết (xem phần 5).

---

### 5️⃣ Chiến lược Pull Request & Review

Mục tiêu là cân bằng giữa tốc độ, chất lượng, và khả năng mở rộng.

#### **Khi nào cần review?**

| Kịch bản | Yêu cầu Review | Ghi chú |
| :--- | :--- | :--- |
| **Commit lên `main`** | ✅ **Bắt buộc** | Tuyệt đối không push trực tiếp. Mọi thay đổi phải qua PR. |
| **Tính năng mới / Bug fix quan trọng** | ✅ **Bắt buộc** | Cần ít nhất **2 người review** (hoặc 1 nếu team nhỏ) để đảm bảo chất lượng và chia sẻ kiến thức. |
| **Hotfix (sửa lỗi khẩn cấp)** | ✅ **Ưu tiên, nhưng có thể linh hoạt** | Cần review nhanh. Nếu khẩn cấp, PM có thể tự merge sau khi thông báo team và CI/CD pass. |
| **Task nhỏ (VD: sửa typo, docs, style)** | ❌ **Không bắt buộc** | Developer có thể tự merge PR của mình **sau khi CI/CD pass**. |
| **Branch cá nhân / Thử nghiệm** | ❌ **Không bắt buộc** | Branch không merge vào `main`, dev toàn quyền quyết định. |

#### **Template Pull Request:**

```markdown
# [TICKET-123] Tóm tắt tính năng hoặc sửa lỗi

## Vấn đề
Mô tả ngắn gọn vấn đề mà PR này giải quyết (Link đến ticket/task).

## Giải pháp
Mô tả các thay đổi chính đã thực hiện.

## Cách kiểm tra
Các bước cụ thể để reviewer kiểm tra (VD: chạy unit test, kiểm tra UI, kiểm tra API,...).

## Ảnh chụp màn hình/GIF
(Nếu có thay đổi về UI, đính kèm ảnh hoặc GIF minh họa.)

## Checklist
- [ ] Đã chạy và pass tất cả unit tests.
- [ ] Đã kiểm tra code style (linter/formatter).
- [ ] Đã kiểm tra trên các môi trường (VD: dev, staging).
- [ ] Đã cập nhật tài liệu nếu cần.

## Ghi chú thêm
Bất kỳ thông tin nào khác mà reviewer cần biết.
```

#### **Tiêu chuẩn của một Pull Request tốt:**
- **Tiêu đề rõ ràng:** Tóm tắt thay đổi, ví dụ: `[TICKET-123] Add user login with Google OAuth`.
- **Phạm vi nhỏ:** Một PR chỉ nên giải quyết **một** vấn đề.
- **Tự review trước:** Đọc lại code, kiểm tra linter, và chạy test trước khi yêu cầu review.
- **Tích hợp CI/CD:** PR chỉ được merge khi tất cả kiểm tra tự động pass.

---

### 6️⃣ Quy ước về Commit Message

Chúng ta sử dụng **Conventional Commits** để đảm bảo lịch sử commit dễ đọc và có thể tự động hóa (VD: tạo changelog).

**Cấu trúc:**
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

| Type | Ý nghĩa |
| :--- | :--- |
| `feat` | Thêm tính năng mới |
| `fix` | Sửa một lỗi |
| `docs` | Thay đổi về tài liệu |
| `style` | Format code (dấu chấm phẩy, thụt lề...) |
| `refactor` | Tái cấu trúc code, không thay đổi chức năng |
| `perf` | Cải thiện hiệu năng |
| `test` | Thêm hoặc sửa test case |
| `chore` | Các công việc khác không ảnh hưởng code (VD: build, CI/CD) |
| `ci` | Thay đổi cấu hình CI/CD |

**Ví dụ commit hoàn chỉnh:**
```bash
git commit -m "feat(auth): implement social login via Google

Add Google OAuth2 strategy for user authentication.
This allows users to sign up and log in with their Google account,
improving user experience.

Closes: #45"
```

**Công cụ hỗ trợ:** Sử dụng **commitlint** hoặc **commitizen** để đảm bảo commit message tuân thủ quy ước.

---

### 7️⃣ Quản lý Tag & Release

Để quản lý phiên bản khi team và dự án mở rộng, chúng ta sử dụng **Semantic Versioning** (MAJOR.MINOR.PATCH).

**Quy trình:**
1. **Tạo nhánh release:**
    ```bash
    git checkout main
    git pull origin main
    git checkout -b release/v1.2.0
    ```
2. **Cập nhật phiên bản:** Chỉnh sửa file version (VD: `package.json`) hoặc changelog.
3. **Đẩy nhánh release và tạo PR:**
    ```bash
    git push -u origin release/v1.2.0
    ```
4. **Merge PR vào `main`:** Sau khi được review và CI/CD pass.
5. **Đánh tag:**
    ```bash
    git checkout main
    git pull origin main
    git tag -a v1.2.0 -m "Release version 1.2.0"
    git push origin v1.2.0
    ```
6. **Triển khai:** Deploy từ tag hoặc nhánh `main`.

**Lưu ý:** Hotfix sẽ được tạo trực tiếp từ `main`, sau khi merge sẽ đánh tag mới (VD: `v1.2.1`).

---

### 8️⃣ Tích hợp CI/CD

Tích hợp CI/CD giúp tự động hóa kiểm tra và triển khai, đảm bảo chất lượng code khi team mở rộng.

**Công cụ đề xuất:**
- **GitHub Actions**, **Jenkins**, hoặc **CircleCI** để chạy pipeline.
- **Linter/Formatter:** ESLint, Prettier (cho JS), Black (cho Python),...
- **Testing:** Jest, Mocha, Pytest,...

**Pipeline mẫu (GitHub Actions):**
```yaml
name: CI Pipeline
on:
  push:
    branches:
      - main
      - feature/*
      - bugfix/*
      - hotfix/*
  pull_request:
    branches:
      - main
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm install
      - name: Run linter
        run: npm run lint
      - name: Run tests
        run: npm test
```

**Yêu cầu:**
- Mọi PR phải pass pipeline CI/CD trước khi được merge.
- PM/Reviewer kiểm tra kết quả pipeline trên GitHub trước khi phê duyệt.

---

### 9️⃣ Các Nguyên tắc Vàng

- **`main` luôn "sạch":** Branch `main` phải luôn ở trạng thái sẵn sàng để deploy.
- **Không bao giờ push trực tiếp lên `main`:** Mọi thứ phải qua Pull Request.
- **Commit nhỏ, thường xuyên:** Giúp dễ review và rollback khi cần.
- **Luôn `pull --rebase` trước khi push:** Giữ lịch sử commit thẳng và sạch.
- **Xóa branch sau khi merge:** Giữ repository gọn gàng.
- **Tích hợp CI/CD:** Đảm bảo mọi thay đổi đều được kiểm tra tự động.
- **Giao tiếp là trên hết:** Nếu không chắc chắn, hãy hỏi team qua Slack/Email.

---

### 🔟 Git Cheatsheet (Các lệnh thường dùng)

<details>
<summary><strong>Nhấn để xem Cheatsheet</strong></summary>

| Lệnh | Mục đích |
| :--- | :--- |
| **Bắt đầu & Cập nhật** | |
| `git clone <url>` | Sao chép một repository về máy. |
| `git pull origin <branch>` | Lấy thay đổi mới nhất từ remote về. |
| **Branching & Merging** | |
| `git branch` | Liệt kê các branch. |
| `git checkout -b <branch-name>` | Tạo và chuyển sang branch mới. |
| `git checkout <branch-name>` | Chuyển sang một branch đã có. |
| `git merge <branch-name>` | Trộn branch `<branch-name>` vào branch hiện tại. |
| **Làm việc với thay đổi** | |
| `git status` | Xem trạng thái các file thay đổi. |
| `git add <file>` / `git add .` | Đưa file vào khu vực Staging. |
| `git commit -m "message"` | Ghi lại các thay đổi đã staged. |
| `git diff` | Xem chi tiết các thay đổi chưa staged. |
| **Remote Repository** | |
| `git push origin <branch-name>` | Đẩy các commit lên remote. |
| `git push -u origin <branch-name>` | Đẩy và thiết lập tracking cho branch. |
| **Lịch sử & Hoàn tác** | |
| `git log --oneline` | Xem lịch sử commit trên một dòng. |
| `git reset --soft HEAD~1` | Hoàn tác commit cuối cùng, giữ lại thay đổi. |
| `git stash` / `git stash pop` | Cất tạm / Lấy lại các thay đổi chưa commit. |
| **Tag & Release** | |
| `git tag -a v1.2.0 -m "message"` | Tạo tag có chú thích. |
| `git push origin v1.2.0` | Đẩy tag lên remote. |

</details>

---

### 1️⃣1️⃣ Xử lý Conflict Nâng cao

Khi team mở rộng, xung đột (conflict) có thể xảy ra thường xuyên hơn. Dưới đây là quy trình chi tiết:

1. **Xác định file bị conflict:**
    ```bash
    git pull origin main
    # Nếu có conflict, Git sẽ báo các file bị conflict
    ```
2. **Mở file và sửa tay:**
   - Tìm các dấu `<<<<<<<`, `=======`, `>>>>>>>`.
   - Quyết định giữ lại hoặc kết hợp các thay đổi từ cả hai nhánh.
3. **Đánh dấu đã giải quyết:**
    ```bash
    git add <file-đã-sửa>
    ```
4. **Hoàn tất quá trình:**
   - Nếu đang merge:
     ```bash
     git commit
     ```
   - Nếu đang rebase:
     ```bash
     git rebase --continue
     ```
5. **Kiểm tra lại:**
   - Chạy test hoặc linter để đảm bảo không có lỗi mới.
   - Push lại branch:
     ```bash
     git push --force-with-lease
     ```

**Mẹo:**
- Sử dụng công cụ như **VS Code**, **GitLens**, hoặc **SourceTree** để trực quan hóa conflict.
- Nếu conflict phức tạp, trao đổi với người tạo thay đổi trước khi sửa.
- Backup branch trước khi rebase hoặc merge để tránh mất dữ liệu:
  ```bash
  git branch backup-my-branch
  ```



**Tóm tắt các cải tiến:**
- Thêm quy trình **Tag & Release** và **CI/CD** để hỗ trợ quản lý phiên bản và tự động hóa.
- Cung cấp **PR Template** cụ thể để chuẩn hóa quy trình.
- Bổ sung hướng dẫn **xử lý conflict nâng cao** và khuyến nghị công cụ hỗ trợ.
- Đề xuất sử dụng **Git hooks**, **linter**, và **commitlint** để đảm bảo chất lượng code.
- Cập nhật sơ đồ workflow để tích hợp CI/CD.
