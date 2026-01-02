## Clementine — Short-Form Learning Across Web, iOS, Android

### 1) Product Brief
- Purpose: let teachers post short, focused video explanations (homework helpers, micro-lessons) that students can swipe through like TikTok/YouTube Shorts and respond with feedback.
- Audiences: classroom teachers, students (K-12 and higher-ed study groups), school admins (oversight/compliance).
- Success signals: upload-to-publish time < 2 minutes, 95% playback success, daily active student retention, teacher content output, useful feedback volume.

### 2) Core User Journeys
- Teacher: record/upload short video (30–120s) with prompt, add course tags, optional quiz/poll, publish to class; view analytics and replies.
- Student: open feed per class/topic, swipe to play, save/bookmark, answer quick quiz/poll, leave feedback (text/emoji/voice), request clarification.
- Admin/Moderator: manage classes, roster sync, visibility rules, review flagged content, export compliance logs.

### 3) Platform Targets
- Web (desktop + mobile web) for broad reach and classrooms with laptops/Chromebooks.
- Mobile apps (iOS, Android) for native camera, offline caching, push notifications.
- Teacher tooling first on web + mobile; student-first feed performant on all.

### 4) Feature Set (MVP → V1)
- Short video feed with swipe navigation and adaptive bitrate streaming (HLS/DASH).
- Upload flow: capture/trim, auto-transcode, thumbnails, captions (ASR), tagging to course/lesson.
- Access control: class/section membership, invite codes or SSO (Google, Microsoft, Apple).
- Feedback: quick reactions, text/voice comments, structured “I’m stuck on step ___” prompt, quiz/poll blocks.
- Discovery: per-class feed, topic filters, search across title/tags/transcripts.
- Notifications: new drop from teacher, replies to your comment, quiz results.
- Offline: prefetch next N videos on mobile, resume playback state.
- Moderation: flagging, wordlist/ML toxicity filter, teacher-only visibility until approved (toggleable).
- Analytics: per video watch-through %, drop-off heatmap, quiz correctness, feedback sentiment.

### 5) Proposed Architecture
- Frontend (web): Next.js/React, server components where helpful; Tailwind or CSS modules; shaka-player/hls.js for web playback; Upload via tus/Resumable.
- Mobile: React Native + Expo (eases camera/notifications) or native Swift/Kotlin if heavier video editing is required later; use react-native-video/AVFoundation/ExoPlayer.
- Backend: TypeScript + NestJS/Express or FastAPI; GraphQL or REST + WebSockets for realtime comments/notifications.
- Video pipeline: upload to object storage (S3/GCS), trigger transcoding (AWS Elastic Transcoder/MediaConvert or Cloud Transcoder), store HLS renditions + thumbnails + VTT captions.
- Data: Postgres for relational (users, classes, enrollments, videos, quizzes, comments), Redis for feed caching and notifications fan-out, optional Elastic/OpenSearch for transcript search.
- Auth: OAuth (Google Workspace, Microsoft), Apple for iOS, JWT access + refresh; role model (teacher, student, admin), org + class scoping.
- Storage/Infra: CDN in front of media (CloudFront/Fastly), VPC + private subnets for services, IaC via Terraform; CI/CD GitHub Actions.
- Observability: OpenTelemetry traces, structured logs, metrics (playback errors, upload failures, latency), feature flags (LaunchDarkly/open-source alternatives).

### 6) Data Model Sketch
- User: id, role, org_id, profile, auth identities.
- Class/Course: id, org_id, title, sections, enrollment rules, invite codes.
- Enrollment: user_id, class_id, role, status.
- Video: id, teacher_id, class_id, title, description, tags, media_urls (master + renditions), transcript, duration, status (draft/processing/live), visibility.
- Feedback: id, video_id, user_id, type (reaction/comment/voice), text/blob, sentiment, timestamps; quiz responses linked to quiz question.
- Quiz/Poll: video_id, question, answers, correct_answer(optional), response stats.
- Events/Analytics: playback events, quiz submissions, flags, moderation actions.

### 7) API Outline (REST or GraphQL)
- Auth: login (SSO), refresh, passwordless magic link (optional).
- Classes: create/list/enroll, roster import (CSV/Google Classroom), invite/join.
- Videos: create upload session, complete upload, get playback sources, update metadata, list feed (by class/topic), search transcripts.
- Feedback: post comment/reaction/voice note, list thread, report/flag.
- Quiz: attach questions to video, submit answers, fetch aggregates.
- Notifications: subscribe/unsubscribe, mark read, push token registration.
- Admin: moderation queue, audit logs export, role assignments.

### 8) Playback & Upload Notes
- Use chunked uploads with retry/resume; enforce max length (e.g., 2–3 minutes) for focus.
- Auto-generate captions via ASR; allow teacher edits; burn-in optional.
- Adaptive streaming with multiple bitrates/resolutions; preflight device capability.
- Prefetch next clip on mobile; low-latency start via short GOPs; cache headers tuned via CDN.

### 9) Moderation & Safety
- Combine wordlist + ML toxicity checks on captions/comments.
- Flag workflow with thresholds to auto-hide after N flags; teacher/admin review UI.
- Privacy: FERPA/GDPR posture, data retention windows, per-org encryption keys where required.

### 10) Security & Compliance
- Org-scoped data access; row-level security in Postgres or service-layer guards.
- Enforce signed URLs for media, short TTL; no public buckets.
- Input validation, rate limits on uploads/comments, CAPTCHA for anonymous joins if enabled.
- Audit logs for admin and moderation actions; backup/restore playbooks.

### 11) Analytics & Feedback Loops
- Client events: impression, start, quartiles, complete, rewind, speed change, buffering.
- Teacher view: heatmap of drop-off, quiz correctness, top comments, flagged issues.
- Student view: streaks, completion, mastery per topic; optional gentle nudges.

### 12) Roadmap (suggested)
1. Foundations: auth, org/class model, upload + processing pipeline, basic feed playback.
2. Feedback layer: comments/reactions, quiz/poll blocks, notifications.
3. Quality: captions edit, search transcripts, offline/prefetch, analytics dashboard.
4. Safety/compliance: moderation queue, audit logs, signed media, data retention controls.
5. Scale: CDN tuning, background workers, sharded queues, classroom imports/SSO polish.

### 13) Tech Choices (swappable)
- If you want speed: Next.js + React Native (Expo), NestJS, Postgres, Redis, S3 + MediaConvert, CloudFront, Auth0/Clerk/Supabase Auth.
- If you prefer Python: FastAPI, Celery workers for transcoding orchestration; same storage/CDN stack.
- If leaning Firebase: Firebase Auth, Firestore for metadata, Cloud Storage + Transcoder API, FCM for push; note migration/egress considerations.

### 14) Testing & QA
- Unit: services, upload handlers, auth guards.
- Integration: upload→transcode→publish, feed pagination, RLS/ACL enforcement, notification delivery.
- Client e2e: feed swipe, playback resilience, offline prefetch, quiz submission.
- Load tests: upload concurrency, playback token issuance, comment storms.

### 15) Deployment Sketch
- Environments: dev/stage/prod; infra via Terraform; CI/CD GitHub Actions with preview deploys.
- Services: API + worker autoscaling; CDN in front of media; Web app on Vercel/CloudFront; mobile via TestFlight/Internal testing.

### 16) Next Steps
- Pick stack variant (TS/Nest + React/React Native vs. FastAPI) and hosting (AWS/GCP).
- Define V1 scope and non-goals; timebox MVP to 4–6 weeks.
- Stand up auth + class model + upload pipeline first; ship internal dogfood with 5–10 videos.
- Capture feedback loop early (comments/reactions) to validate engagement.