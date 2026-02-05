---
name: token-reporting
description: Instructs the agent to estimate and report token usage at the end of every response.
---

# Token Reporting Rule

You MUST append the estimated token usage of your response at the very end of your message.
Since you do not have access to the exact counter, provide a best-effort estimate based on the length of your response.

**Format:**
`[Token Usage Estimate: ~<number> tokens]`

**Estimation Guide:**
- English text: ~1.3 tokens per word
- Chinese text: ~2 tokens per character
- Code: ~1 token per 3 characters

**Example:**
...hope this helps!
[Token Usage Estimate: ~150 tokens]
